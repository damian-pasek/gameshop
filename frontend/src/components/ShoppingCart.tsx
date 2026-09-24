import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const {
    closeCart,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const response = await fetch("/games");
        const data = await response.json();
        setStoreItems(data);
      } catch (error) {
        console.error("Failed to fetch store items:", error);
      }
    }

    if (isOpen) {
      fetchStoreItems();
    }
  }, [isOpen]);


  const clearCart = () => {
    cartItems.forEach((item) => removeFromCart(item.id));
  };

  const handleCheckout = () => {
    navigate(isLoggedIn ? "/payment" : "/login", {
      state: isLoggedIn ? undefined : { from: "/payment" },
    });
  };

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            if (!item) return null;

            return (
              <div
                key={cartItem.id}
                className="d-flex align-items-center justify-content-between"
              >
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  className="rounded"
                />
                <div className="me-auto ms-3">
                  <div>{item.name}</div>
                  <div className="text-muted" style={{ fontSize: ".85rem" }}>
                    {cartItem.quantity} x {formatCurrency(item.price)}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => decreaseCartQuantity(cartItem.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{cartItem.quantity}</span>
				  <Button
				    variant="outline-secondary"
				    size="sm"
				    onClick={() => increaseCartQuantity(cartItem.id)}
				  >
				    +
				  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-3"
                    onClick={() => removeFromCart(cartItem.id)}
                  >
                    ×
                  </Button>
                </div>
              </div>
            );
          })}

          <div className="ms-auto fw-bold fs-5 mt-3">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <Button
            variant="outline-danger"
            className="mt-3"
            onClick={clearCart}
          >
            Empty cart
          </Button>
		  <Button
		    variant="primary"
		    className="mt-3"
		    onClick={handleCheckout}
		  >
		    Checkout
		  </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
