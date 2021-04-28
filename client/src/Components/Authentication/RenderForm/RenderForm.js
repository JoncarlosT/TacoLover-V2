import React, { useState } from "react";

//IMPORT STYLES
import { StyledRenderForm, HeaderWrapper, FormButton } from "./styles";

export default function RenderForm() {
  const [login, setLogin] = useState(true);

  return (
    <StyledRenderForm>
      <HeaderWrapper>
        <FormButton onClick={() => setLogin(true)}>Login</FormButton>
        <FormButton onClick={() => setLogin(false)}>Register</FormButton>
      </HeaderWrapper>
    </StyledRenderForm>
  );
}
