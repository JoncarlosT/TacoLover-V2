import React from "react";
import { Link as Scroll } from "react-scroll";

//IMPORT COMPONENTS
import ImageCard from "../../Components/ImageCard/ImageCard";
import LandingPageInfo from "./LandingPageInfo";

//IMPORT STYLES
import {
  StyledLandingPage,
  WelcomeHeader,
  WelcomeText,
  TacoLoverText,
  ImageCardWrapper,
  DownArrow,
  WelcomeWrapper,
} from "./styles";

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <WelcomeWrapper>
        <Scroll to="body" smooth={true}>
          <WelcomeHeader>
            <WelcomeText>Welcome To</WelcomeText>
            <TacoLoverText>
              <span>Ta</span>
              co
              <span>Lover</span>
            </TacoLoverText>
            <DownArrow />
          </WelcomeHeader>
        </Scroll>
      </WelcomeWrapper>
      <ImageCardWrapper id="body">
        {LandingPageInfo.map((info, i) => {
          return <ImageCard details={info} key={i} />;
        })}
      </ImageCardWrapper>
    </StyledLandingPage>
  );
}
