import React from "react";
import page404 from "../../Assets/Images/404.jpg";
const NotFound = () => {
  return (
    <div className="mt-5">
      <h2 className="text-center text-danger">Page not found</h2>
      <img className=" w-100 img-fluid" src={page404} alt="" />
    </div>
  );
};

export default NotFound;
