import React, { createContext, useEffect, useState } from "react";

const UserSelectsContext = createContext();

function UserSelectsContextProvider(props) {
  const [selectedFood, setSelectedFood] = useState({});
  const [selectedRestaurant, setSelectedRestaurant] = useState({});

  useEffect(() => {
    const Taco = localStorage.getItem("Taco");
    if (Taco) {
      setSelectedFood(JSON.parse(Taco));
    }

    const Restaurant = localStorage.getItem("Restaurant");
    if (Restaurant) {
      setSelectedRestaurant(JSON.parse(Restaurant));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Taco", JSON.stringify(selectedFood));
    localStorage.setItem("Restaurant", JSON.stringify(selectedRestaurant));
  });

  return (
    <UserSelectsContext.Provider
      value={{
        selectedFood,
        setSelectedFood,
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {props.children}
    </UserSelectsContext.Provider>
  );
}

export default UserSelectsContext;
export { UserSelectsContextProvider };
