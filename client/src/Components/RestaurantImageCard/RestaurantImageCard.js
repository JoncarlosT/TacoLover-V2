import React, { useContext } from "react";

//IMPORT STYLE
import {
  StyledRestaurantImageCard,
  NavLink,
  CardImage,
  CardInfo,
  CardTitle,
  CardAction,
  CardDescription,
  CardAuthor,
} from "./styles";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "../../Context/UserSelectsContext";

export default function RestaurantImageCard({ restaurant }) {
  const { setSelectedRestaurant } = useContext(UserSelectsContext);

  const windowReset = () => {
    window.scroll(0, 0);
  };

  return (
    <StyledRestaurantImageCard>
      <CardAction onClick={() => setSelectedRestaurant(restaurant)}>
        <NavLink
          to={`/Restaurant/${restaurant._id}`}
          onClick={() => windowReset()}
        >
          <CardImage
            component="img"
            alt={restaurant.title}
            src={restaurant.images}
          />
          <CardInfo>
            <CardTitle>{restaurant.title}</CardTitle>
            <CardDescription>{restaurant.description}</CardDescription>
            <CardAuthor>By: {restaurant.author.userName} </CardAuthor>
          </CardInfo>
        </NavLink>
      </CardAction>
    </StyledRestaurantImageCard>
  );
}
