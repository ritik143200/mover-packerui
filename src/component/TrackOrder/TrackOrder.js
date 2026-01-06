import { useState } from "react";
import axios from "axios";

function TrackOrder() {
  const [orderid, setOrderid] = useState("");
  const [order, setOrder] = useState(null);

  const track = () => {
    axios.get("http://localhost:3001/order/track/" + orderid)
      .then(res => setOrder(res.data))
      .catch(() => alert("Order not found"));
  };

  return (
    <div>
      <h3>Track Your Order</h3>
      <input type="number" onChange={e => setOrderid(e.target.value)} />
      <button onClick={track}>Track</button>

      {order && (
        <div>
          <p>Status:
            {order.status === 0 && "Placed"}
            {order.status === 1 && "Confirmed"}
            {order.status === 2 && "Shipped"}
            {order.status === 3 && "Delivered"}
          </p>
        </div>
      )}
    </div>
  );
}

export default TrackOrder;
