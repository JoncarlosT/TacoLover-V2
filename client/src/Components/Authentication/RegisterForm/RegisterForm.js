import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

//IMPORT STYLES
import {
  StyledRegisterForm,
  UserRegisterForm,
  RegisterInput,
  RegisterButton,
  ErrorMessage,
  TextHeader,
} from "./style";

//IMPORT AUTHENTICATION
import AuthenticationContext from "../../../Context/AuthenticationContext";
import DevLocalHost from "../../../GlobalProvider";

export default function RegisterForm() {
  //ERROR HANDLER
  const [error, setError] = useState();

  //REGISTER USER
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthenticationContext);
  const history = useHistory();

  const register = async (event) => {
    event.preventDefault();

    const registerData = {
      email,
      userName,
      password,
      passwordVerify,
    };

    try {
      await axios.post(DevLocalHost() + "/authentication/", registerData);
      await getLoggedIn();
    } catch (err) {
      setError(err.response.data.errorMessage);
    }
  };

  const EnterSubmit = (e) => {
    if (e.code === "Enter") register(e);
  };

  return (
    <StyledRegisterForm>
      <TextHeader>Let's Get You Registered!</TextHeader>
      <UserRegisterForm>
        <RegisterInput
          placeholder="Email"
          value={email}
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <RegisterInput
          placeholder="Username"
          value={userName}
          type="text"
          label="Username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <RegisterInput
          placeholder="Password"
          value={password}
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <RegisterInput
          placeholder="Re-enter Password"
          value={passwordVerify}
          type="password"
          label="PasswordVerify"
          onChange={(e) => setPasswordVerify(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <RegisterButton type="submit" onClick={(e) => register(e)}>
          Register
        </RegisterButton>
      </UserRegisterForm>
      {typeof errorMessage !== undefined && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </StyledRegisterForm>
  );
}
