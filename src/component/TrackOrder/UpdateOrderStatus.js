import { useEffect, useState } from "react";
import axios from "axios";

function UpdateOrderStatus() {

  const [orders, setOrders] = useState([]);

  // Orders fetch
  useEffect(() => {
    axios.get("http://localhost:3001/order/fetch")
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Status update function
  const updateStatus = (orderid, status) => {
    axios.patch("http://localhost:3001/order/update", {
      orderid: orderid,
      status: status
    })
    .then(() => {
      setOrders(
        orders.map(order =>
          order._id === orderid ? { ...order, status } : order
        )
      );
      alert("Order status updated");
    })
    .catch(err => console.log(err));
  };

  // Status text
  const getStatusText = (s) => {
    if (s === 0) return "Placed";
    if (s === 1) return "Confirmed";
    if (s === 2) return "Shipped";
    if (s === 3) return "Delivered";
  };

  return (
    <div>
      <h2>Order Management</h2>

      {orders.length === 0 && <p>No orders found</p>}

      {orders.map(order => (
        <div key={order._id} style={{ border: "1px solid #000", margin: "10px", padding: "10px" }}>
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Status:</b> {getStatusText(order.status)}</p>

          <button onClick={() => updateStatus(order._id, 1)}>Confirm</button>
          <button onClick={() => updateStatus(order._id, 2)}>Ship</button>
          <button onClick={() => updateStatus(order._id, 3)}>Deliver</button>
        </div>
      ))}
    </div>
  );
}

export default UpdateOrderStatus;
