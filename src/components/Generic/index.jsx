import React from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

const Generic = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      <div>Generic {location?.pathname}</div>
    </Container>
  );
};

export default Generic;
