import { createGlobalStyle } from "styled-components";
import bg from "./Assets/Taco-bg.jpg";

//GLOBAL STYLES
export const GlobalStyle = createGlobalStyle`
    *{margin: 0}
    body{
        font-family: Nunito;
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
         @media screen and (max-width: 625px) {
            height: 100vh;
          }
         @media screen and (max-width: 375px) {
            height: 150vh;
          }
     }
    

`;

//DEV LOCALHOST REQUEST
const DevLocalHost = () => {
  if (process.env.NODE_ENV === "production") return "";
  else return "http://localhost:3001";
};

export default DevLocalHost;
