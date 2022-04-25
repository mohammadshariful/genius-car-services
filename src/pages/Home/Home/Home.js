import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Bannar from "../Bannar/Bannar";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Bannar />
      <Services />
      <Experts />
    </>
  );
};

export default Home;
