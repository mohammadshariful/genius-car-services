import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const navigate = useNavigate();
  const { _id, name, img, description, price } = service;
  return (
    <div className="service">
      <img src={img} className="img-fluid" alt="" />
      <h2>{name} </h2>
      <p>Price : {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigate(`/service/${_id}`)}
        className="btn btn-primary"
      >
        Book:{name}
      </button>
    </div>
  );
};

export default Service;
