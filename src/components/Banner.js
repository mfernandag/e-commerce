import React from "react";
import { Alert } from "react-bootstrap";

const Banner = ({ greeting }) => {
  return <Alert variant="dark">{greeting}</Alert>;
};

export default Banner;
