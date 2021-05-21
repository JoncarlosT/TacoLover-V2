import styled from "styled-components";
import { Link } from "react-router-dom/";

export const StyledRestaurantsPage = styled.div`
  overflow: hidden;
`;

export const RestaurantsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TacoIcon = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const CreateRestaurantWrapper = styled.div`
  padding: 60px;
  display: flex;
  justify-content: center;
`;

export const CreateRestaurantButton = styled(Link)`
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

export const Text = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
  margin: 20px;
`;
