import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

//IMPORT AUTHENTICATION
import AuthenticationContext from "../../../Context/AuthenticationContext";

//IMPORT STYLES
import {
  StyledLoginForm,
  LoginFrom,
  LoginInput,
  LoginButton,
  ErrorMessage,
} from "./style";

//IMPORT COMPONENTS
import DevLocalHost from "../../../GlobalProvider";

export default function LoginForm() {
  //ERROR HANDLER
  const [error, setError] = useState();

  //USER LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const { getLoggedIn } = useContext(AuthenticationContext);

  const login = async (event) => {
    event.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      await axios.post(DevLocalHost() + "/authentication/login", loginData);
      await getLoggedIn();
      history.push("/Restaurants");
    } catch (err) {
      setError(err.response.data.errorMessage);
    }
  };

  const EnterSubmit = (e) => {
    if (e.code === "Enter") login(e);
  };

  return (
    <StyledLoginForm>
      <LoginFrom onSubmit={(e) => login(e)}>
        <LoginInput
          placeholder="Email"
          value={email}
          type="email submit"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <LoginInput
          placeholder="Password"
          value={password}
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <LoginButton type="submit" onClick={(e) => login(e)}>
          Login
        </LoginButton>
      </LoginFrom>
      {typeof errorMessage !== undefined && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </StyledLoginForm>
  );
}
