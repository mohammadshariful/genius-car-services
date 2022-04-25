import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase.init";
import useServiceDetail from "../../../Hooks/useServiceDetail";
const Checkout = () => {
  const { serviceId } = useParams();
  const { service } = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast.success("Your order is booked");
        event.target.reset();
      }
    });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2>Please Order {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Name"
          value={user.displayName}
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          placeholder="Service"
          value={service.name}
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input
          className="btn btn-primary d-block mx-auto"
          type="submit"
          value="place order"
        />
      </form>
    </div>
  );
};

export default Checkout;
