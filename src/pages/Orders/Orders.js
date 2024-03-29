import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessItem")}`,
          },
        });
        setOrders(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          console.log(error.message);
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getOrders();
  }, [user]);

  return (
    <div>
      <h2>Your Orders : {orders.length}</h2>
    </div>
  );
};

export default Orders;
