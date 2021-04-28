import React, { useContext, useState } from "react";
import axios from "axios";

//IMPORT AUTHENTICATION
import AuthenticationContext from "../../../Context/AuthenticationContext";

//IMPORT STYLES
import { StyledLoginForm, LoginFrom, LoginInput, LoginButton } from "./style";

//IMPORT COMPONENTS
import DevLocalHost from "../../../GlobalProvider";

export default function LoginForm() {
  //USER LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthenticationContext);

  const login = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      await axios.post(DevLocalHost() + "/authentication/login/", loginData);
      await getLoggedIn();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledLoginForm>
      <LoginFrom onSubmit={(e) => login(e)}>
        <LoginInput
          placeholder="Email"
          value={email}
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          placeholder="Password"
          value={password}
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={(e) => login(e)}>Login</LoginButton>
      </LoginFrom>
    </StyledLoginForm>
  );
}
