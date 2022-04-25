import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  return (
    <div id="services" className="container">
      <h2 className="text-center mt-5 text-primary">Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
