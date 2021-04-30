import React from "react";
import Router from "./Router";
import axios from "axios";

//IMPORT AUTHENTICATION
import { AuthenticationContextProvider } from "./Context/AuthenticationContext";

//IMPORT USER CONTEXT
import { UserSelectsContextProvider } from "./Context/UserSelectsContext";

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <AuthenticationContextProvider>
      <UserSelectsContextProvider>
        <Router />
      </UserSelectsContextProvider>
    </AuthenticationContextProvider>
  );
}
