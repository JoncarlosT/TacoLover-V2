import React, { useContext } from "react";

//IMPORT STYLE
import {
  StyledFoodImageCard,
  NavLink,
  CardImage,
  CardInfo,
  CardTitle,
  CardAction,
} from "./styles";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "../../Context/UserSelectsContext";

export default function FoodImageCard({ food }) {
  const { setSelectedFood } = useContext(UserSelectsContext);

  const windowReset = () => {
    window.scroll(0, 0);
  };

  return (
    <StyledFoodImageCard>
      <CardAction onClick={() => setSelectedFood(food)}>
        <NavLink to={`/recipe/${food.id}`} onClick={() => windowReset()}>
          <CardImage component="img" alt={food.title} src={food.image} />
          <CardInfo>
            <CardTitle>{food.title}</CardTitle>
          </CardInfo>
        </NavLink>
      </CardAction>
    </StyledFoodImageCard>
  );
}
