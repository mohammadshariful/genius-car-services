import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetail from "../../Hooks/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { service } = useServiceDetail(serviceId);

  return (
    <div>
      <h2>Your are about to book : {service.name}</h2>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/checkout/${serviceId}`)}
        >
          Process Checkout
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
