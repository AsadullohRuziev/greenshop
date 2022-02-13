import React from "react";
import { Container } from "./style";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  return (
    <Container>
      <div>Navbar</div>
        {
          navbar.map(value => (
            <h1>{value.title}</h1>
          ))
        }
    </Container>
  );
};

export default Navbar;
