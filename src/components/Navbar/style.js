import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--greenColor);
  font-size: 18px;
`;

export const Logo = styled("img")`
  width: 55px;
  height: 55px;
  margin-right: 6px;
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;

`;

export const ItemsGroup = styled.div`
  display: flex;
`;
export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: Cera Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 20px;
  color: ${({active})=> active ? '#46A358' :'#3d3d3d'};
  margin: 0 25px;
`;
