import styled from "styled-components";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export const StyledRestaurantImageCard = styled(Card)`
  height: 480px;
  width: 380px;
  margin: 30px;

  && {
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 380px) {
    width: 90vw;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const CardAction = styled(CardActionArea)``;

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
  font-size: 1.5rem;
  text-align: center;
  font-family: Nunito;
`;

export const CardDescription = styled.p`
  font-size: 1.4rem;
  font-family: Nunito;
  text-align: center;
`;

export const CardAuthor = styled.p`
  font-size: 1.4rem;
  font-family: Nunito;
`;
