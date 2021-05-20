# TacoLover

### Background and Overview

Tacolover is a full CRUD web app, that focuses on your love for tacos. Locations can be added and removed by users, allowing them to share their favorite Taco selling restaurants. Users can also, comment on restaurants and recipes on the app for a community driven experience.

Website [Live](https://tacolover-1.herokuapp.com/) here

![alt text](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/TacoLover-%20Landing%20Page.gif)

# TacoLover's Architecture and Technologies:

## Stack

- Front-end - React.js
- Back-end - MongoDB, Express, Node

## Technologies

- Cloudinary - Cloud storage for images
- Material-UI - Front-end Modules and Icons
- Mapbox - Interactive world map
- Styled-components - Adding readability and CSS functionality
- Bcryptjs - Security
- Jsonwebtoken - User authentication

## API's

- Spoonacular - List of Tacos Recipes

# Features

## User Authentication

Users can login and register accounts

![alt-text-1](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/JS.png) ![alt-text-2](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/jsx.png)

## "User-Proof"

Back-end validations to ensure correct data inputs

```javascript
router.post("/add", authentication, async (req, res) => {
  try {
    const { title, images, description, location, contact } = req.body;

    //VALIDATIONS
    if (!title || !images || !description || !location || !contact)
      return res
        .status(400)
        .json({ errorMessage: "Please Enter all Required Fields" });
```

## Interactive Map

An interactive map that shows restaurant locations

![alt text](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/TacoLover%20-%20Map.gif)

```javascript
<ReactMap
  {...viewport}
  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  mapStyle="mapbox://styles/jc1280/ckm16fh6i9x6n17o0pm4r5091"
  onViewportChange={(viewport) => setViewport(viewport)}
>
  {restaurants.map((restaurant, i) => {
    return (
      <Marker
        key={i}
        latitude={restaurant.geometry.coordinates[1]}
        longitude={restaurant.geometry.coordinates[0]}
      >
        <TacoIcon
          onClick={(e) => {
            e.preventDefault();
            setSelectedTaco(restaurant);
          }}
          src="/Assets/Taco-svg.png"
          alt="taco"
        />
      </Marker>
    );
  })}

  {selectedTaco && (
    <Popup
      closeOnClick={false}
      onClose={() => setSelectedTaco(null)}
      latitude={selectedTaco.geometry.coordinates[1]}
      longitude={selectedTaco.geometry.coordinates[0]}
    >
      <RestaurantMapInfo info={selectedTaco} />
    </Popup>
  )}
</ReactMap>
```

# User Interface

A fully responsive and mobile friendly interface

### Width - 1600px

![alt text](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/Tacolover-%201600px.PNG)

### Width - 1280px

![alt text](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/Tacolover-%201280px.PNG)

### Width - 768px

![alt text](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/Tacolover-%20768px.PNG)

### Width - 480px

![alt text](https://github.com/JoncarlosT/TacoLover-V2/blob/main/client/public/github/Tacolover-%20480px.PNG)

# Credit

- All recipes were from Spoonacular api
- All images were used from pexels.com
