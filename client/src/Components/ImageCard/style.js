import styled from "styled-components";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StyledImageCard = styled(Card)`
  height: 450px;
  width: 380px;
  margin: 30px;

  && {
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 380px) {
    width: 90vw;
  }
`;

export const CardImage = styled(CardMedia)`
  height: 340px;
`;

export const CardInfo = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export const CardBody = styled.div`
  font-weight: bold;
  text-align: center;
`;
