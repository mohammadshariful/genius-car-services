import React from "react";
import Bannar from "../Bannar/Bannar";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Bannar />
      <Services />
      <Experts />
    </>
  );
};

export default Home;
