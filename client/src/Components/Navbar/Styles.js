import styled from "styled-components";
import { Link } from "react-router-dom/";

export const StyledNavbar = styled.div`
  background: none;
  height: 80px;
  display: flex;
  padding: 2em;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 4vw;
  font-weight: bold;
  span {
    color: hotpink;
  }
  span:nth-child(2) {
    color: green;
  }

  @media screen and (max-width: 890px) {
    font-size: 6vw;
  } ;
`;

export const NavbarButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 400px;
`;

export const NavbarButton = styled(Link)`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  color: #ffffff;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    color: #000000;
    background-color: #ffffff;
  }

  @media screen and (max-width: 890px) {
    font-size: 0.5vw;
  } ;
`;

export const MobileMenuItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 4vw;
  font-weight: bold;
  font-family: Nunito;
`;

export const LogOutMenuItem = styled.div`
  color: black;
  font-size: 4vw;
  font-weight: bold;
  font-family: Nunito;
`;
