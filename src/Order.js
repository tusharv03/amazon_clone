import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Order.css";
import Orde from "./Orde";
import { useStateValue } from "./StateProvider";

function Order() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Orde order={order} />
        ))}
      </div>
    </div>
  );
}

export default Order;
