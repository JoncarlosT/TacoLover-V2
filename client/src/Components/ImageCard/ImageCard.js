import React from "react";

//IMPORT STYLES
import {
  StyledImageCard,
  CardImage,
  NavLink,
  CardInfo,
  CardTitle,
  CardBody,
} from "./style";

export default function ImageCard({ details }) {
  const windowReset = () => {
    window.scroll(0, 0);
  };

  return (
    <StyledImageCard>
      <NavLink to={`${details.link}`} onClick={() => windowReset()}>
        <CardImage image={details.imageUrl} />
        <CardInfo>
          <CardTitle>{details.title}</CardTitle>
          <CardBody>{details.description}</CardBody>
        </CardInfo>
      </NavLink>
    </StyledImageCard>
  );
}
