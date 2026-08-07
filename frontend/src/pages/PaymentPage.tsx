import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useAuth } from "../context/AuthContext";

type StoreItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

type OrderItem = {
  gameId: number;
  quantity: number;
  unitPrice: number;
};

type Order = {
  userId: number;
  items: OrderItem[];
};

export default function PaymentPage() {
  const { cartItems, clearCart } = useShoppingCart();
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    async function fetchStoreItems() {
      try {
        const response = await axios.get("/games");
        setStoreItems(response.data);
      } catch (error) {
        console.error("Failed to fetch store items:", error);
      }
    }
    fetchStoreItems();
  }, []);

  const handlePayment = async () => {
    if (cartItems.length === 0) {
      alert("The cart is empty");
      return;
    }

    // Create order items list based on cart contents
    const orderItems: OrderItem[] = cartItems.map(cartItem => {
      const product = storeItems.find(item => item.id === cartItem.id);
      return {
        gameId: cartItem.id,
        quantity: cartItem.quantity,
        unitPrice: product ? product.price : 0
      };
    });

    // Build the order object
    const order: Order = {
      userId: userId || 0,
      items: orderItems
    };

    try {
      await axios.post("/orders", order, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      alert("Payment successful! Thank you for your purchase.");
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Payment failed:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  if (cartItems.length === 0) {
    return (
        <div className="container mt-5">
          <h1>Your cart is empty!</h1>
          <Button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
            Back to homepage
          </Button>
        </div>
    );
  }

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = storeItems.find(item => item.id === cartItem.id);
    return total + (product?.price || 0) * cartItem.quantity;
  }, 0);

  return (
      <Container className="mt-5">
        <h1>Payment</h1>
        <Table striped bordered hover className="mt-4">
          <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {cartItems.map(cartItem => {
            const product = storeItems.find(item => item.id === cartItem.id);
            if (!product) return null;
            return (
                <tr key={cartItem.id}>
                  <td>{product.name}</td>
                  <td>{cartItem.quantity}</td>
                  <td>{formatCurrency(product.price * cartItem.quantity)}</td>
                </tr>
            );
          })}
          </tbody>
          <tfoot>
          <tr>
            <td colSpan={2}>Total:</td>
            <td>{formatCurrency(totalPrice)}</td>
          </tr>
          </tfoot>
        </Table>
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={() => navigate(-1)}>
            Back to store
          </Button>
          <Button variant="success" onClick={handlePayment}>
            Pay now
          </Button>
        </div>
      </Container>
  );
}