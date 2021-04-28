import React from "react";
import Router from "./Router";
import axios from "axios";

//IMPORT AUTHENTICATION
import { AuthenticationContextProvider } from "./Context/AuthenticationContext";

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <AuthenticationContextProvider>
      <Router />
    </AuthenticationContextProvider>
  );
}
