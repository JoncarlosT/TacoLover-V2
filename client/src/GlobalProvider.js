import { createGlobalStyle } from "styled-components";

//GLOBAL STYLES
export const GlobalStyle = createGlobalStyle`
    *{margin: 0}
    body{
        font-family: Nunito; 
     }
`;

//DEV LOCALHOST REQUEST
const DevLocalHost = () => {
  if (process.env.NODE_ENV === "production") return "/backend";
  else return "http://localhost:3001";
};

export default DevLocalHost;
