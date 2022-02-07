import React, { useState } from "react";
import {
  Container,
  ItemsGroup,
  LinkGroup,
  Logo,
  LogoWrapper,
  Link,
} from "./style";
import { navbar } from "../../utils/navbar";
import logo from "../../assets/imgs/logo.png";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("/home");

  return (
    <div style={{display: 'flex', flexDirection:'column', width:'100%'}}>
      <Container>
        <LogoWrapper>
          <Logo src={logo} alt="logo" /> Greenshop
        </LogoWrapper>
        <LinkGroup>
          {navbar.map((value) => (
            <Link
              onClick={() => setActive(value.path)}
              active={active === value.path}
              to={value.path}
            >
              {value.title}
            </Link>
          ))}
        </LinkGroup>
        <ItemsGroup>items</ItemsGroup>
      </Container>
      <Outlet/>
    </div>
  );
};

export default Navbar;
