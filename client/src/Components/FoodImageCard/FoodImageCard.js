import React from "react";

//IMPORT STYLE
import {
  StyledFoodImageCard,
  NavLink,
  CardImage,
  CardInfo,
  CardTitle,
  CardBody,
} from "./styles";

export default function FoodImageCard({ details }) {
  const windowReset = () => {
    window.scroll(0, 0);
  };

  console.log(details);

  return (
    <StyledFoodImageCard>
      <NavLink to={`${details.link}`} onClick={() => windowReset()}>
        <CardImage component="img" alt={details.title} src={details.image} />
        <CardInfo>
          <CardTitle>{details.title}</CardTitle>
        </CardInfo>
      </NavLink>
    </StyledFoodImageCard>
  );
}
