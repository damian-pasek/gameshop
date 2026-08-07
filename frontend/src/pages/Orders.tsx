import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

type OrderItem = {
  gameId: number;
  name: string;
  quantity: number;
  unitPrice: number;
};

type Order = {
  id: number;
  userId: number;
  orderDate: string;
  totalPrice: number;
};

type OrderResponse = {
  order: Order;
  items: OrderItem[];
};

export function Orders() {
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  const { userRole, userId } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/orders");
        const fetchedOrders: OrderResponse[] = response.data;

        if (userRole !== "admin") {
          setOrders(fetchedOrders.filter(orderResp => orderResp.order.userId === userId));
        } else {
          setOrders(fetchedOrders);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, [userRole, userId]);

  return (
      <Container className="mt-5">
        <h1>Orders</h1>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Total Price</th>
          </tr>
          </thead>
          <tbody>
          {orders.map(orderResp => (
              <React.Fragment key={orderResp.order.id}>
                <tr>
                  <td>{orderResp.order.id}</td>
                  <td>{orderResp.order.userId}</td>
                  <td>{orderResp.order.orderDate}</td>
                  <td>{orderResp.order.totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <strong>Products:</strong>
                    <ul style={{ margin: 0, paddingLeft: "20px" }}>
                      {orderResp.items.map((item: OrderItem) => (
                          <li key={item.gameId}>
                            {item.name} – {item.quantity} × {item.unitPrice.toFixed(2)} zł
                          </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </React.Fragment>
          ))}
          </tbody>
        </Table>
      </Container>
  );
}