import React, { createContext, useEffect, useState, memo } from "react";
import axios from "axios";

//IMPORT FROM GLOBAL PROVIDER
import DevLocalHost from "../GlobalProvider";

const AuthenticationContext = createContext();

//GETS THE LOGGED INFO OF USER AND SHARES WITH THE REST OF APP
function AuthenticationContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    const LoggedInRes = await axios.get(
      DevLocalHost() + "/authentication/loggedIn"
    );
    setLoggedIn(LoggedInRes.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContext;
export { AuthenticationContextProvider };
