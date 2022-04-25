import React from "react";
import { Helmet } from "react-helmet-async";
const TitleHelmet = ({ title, children }) => {
  return (
    <Helmet>
      <title>{title} genius car service</title>
      {children}
    </Helmet>
  );
};

export default TitleHelmet;
