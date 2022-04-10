import React from "react";
import exper1 from "../../../Assets/Images/experts/expert-1.jpg";
import exper2 from "../../../Assets/Images/experts/expert-2.jpg";
import exper3 from "../../../Assets/Images/experts/expert-3.jpg";
import exper4 from "../../../Assets/Images/experts/expert-4.jpg";
import exper5 from "../../../Assets/Images/experts/expert-5.jpg";
import exper6 from "../../../Assets/Images/experts/expert-6.png";
import Expert from "../Expert/Expert";
const experts = [
  { id: 1, name: "Will Smith", img: exper1 },
  { id: 2, name: "Cris Rock", img: exper2 },
  { id: 3, name: "Drayne Rock", img: exper3 },
  { id: 4, name: "Messy Vai", img: exper4 },
  { id: 5, name: "Ronaldo Bro", img: exper5 },
  { id: 6, name: "Stachy Jhonson", img: exper6 },
];
const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center">Our Experts</h2>
      <div className="row justify-content-center">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
