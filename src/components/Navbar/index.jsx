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
import { logo } from "../../utils/icons";
import { HiOutlineLogout, HiOutlineSearch } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import Button from "../../UI/Button";

const Navbar = () => {
  const [active, setActive] = useState("/home");
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Container>
        <LogoWrapper>
          <Logo src={logo} alt="Logo" />
          Greenshop
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
        <ItemsGroup>
          <HiOutlineSearch style={{ fontSize: "20px" }} />
          <FiShoppingCart style={{ fontSize: "20px" }} />
          <Button
            icon={
              <HiOutlineLogout
                style={{ fontSize: "30px", paddingRight: "10px" }}
              />
            }
            title={"Login"}
          />
        </ItemsGroup>
      </Container>
      <Outlet />
    </div>
  );
};

export default Navbar;
