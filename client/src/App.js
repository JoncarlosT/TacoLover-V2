import React from "react";
import Router from "./Router";

import { AuthenticationContextProvider } from "./Context/AuthenticationContext";

export default function App() {
  return (
    <AuthenticationContextProvider>
      <Router />
    </AuthenticationContextProvider>
  );
}
