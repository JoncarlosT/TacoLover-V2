import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const StyledLandingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const WelcomeWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: translateY(10px);
  }
`;

export const WelcomeText = styled.h1`
  color: white;
  font-size: 5rem;
  text-align: center;
`;

export const TacoLoverText = styled.h1`
  color: white;
  font-size: 5rem;
  span {
    color: hotpink;
  }
  span:nth-child(2) {
    color: green;
  }
`;

export const DownArrow = styled(ExpandMoreIcon)`
  color: green;
  transition: transform 500ms;
  will-change: transform;
  && {
    font-size: 5rem;
  }
`;

export const ImageCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 150px;
`;
