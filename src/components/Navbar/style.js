import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 78px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;

export const LogoWrapper = styled.div`
  color: var(--greenColor);
  font-size: 28px;
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
width: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${({ active }) =>
    active ? "#46A358" : "#3d3d3d"}; //active bolsa yashil bo'lmasa qora yonadi
  margin: 0 25px;
`;
