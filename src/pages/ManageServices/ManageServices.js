import React from "react";
import useServices from "../../Hooks/useServices";
const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure ?you want to delete");
    if (procced) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainig = services.filter((service) => service._id !== id);
            setServices(remainig);
          }
        });
    }
  };
  return (
    <div className="text-center ">
      <h2>Please Manage Your Services{services.length}</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h6>
            {service.name}
            <button
              onClick={() => handleDelete(service._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </h6>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
