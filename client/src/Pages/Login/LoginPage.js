import React from "react";

//IMPORT COMPONENTS
import RenderForm from "../../Components/Authentication/RenderForm/RenderForm";

//IMPORT STYLES
import { StyledLoginPage } from "./styles";

export default function LoginPage() {
  return (
    <StyledLoginPage>
      <RenderForm />
    </StyledLoginPage>
  );
}
