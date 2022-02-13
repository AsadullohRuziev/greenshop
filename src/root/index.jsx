import React from "react";
import Generic from "../components/Generic";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { Container } from "./style";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const Root = () => {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Container>
  );
};

export default Root;
