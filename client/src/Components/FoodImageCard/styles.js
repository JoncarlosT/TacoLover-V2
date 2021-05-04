import styled from "styled-components";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StyledFoodImageCard = styled(Card)`
  height: 450px;
  width: 380px;
  margin: 40px;

  && {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const CardAction = styled(CardActionArea)``;

export const CardImage = styled(CardMedia)`
  height: 340px;
  width: 380px;
`;

export const CardInfo = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  font-family: Nunito;
`;
