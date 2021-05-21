import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  RestaurantForm,
  RestaurantFormInput,
  StyledCreateRestaurant,
  RestaurantFormInputDesc,
  RestaurantFormInputImage,
  AddRestaurantButton,
  RestaurantFormInputImageButton,
} from "./styles";

import DevLocalHost from "../../GlobalProvider";

export default function CreateRestaurant() {
  // CREATE RESTAURANTS
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [images, setImages] = useState();
  const [preview, setPreview] = useState();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const fileInput = useRef(null);
  const history = useHistory();

  const createRestaurant = async () => {
    const restaurant = {
      title,
      images,
      description,
      contact,
      location,
    };
    await axios
      .post(DevLocalHost() + "/api/restaurants/add", restaurant)
      .then(history.push("/restaurants"));
  };

  const register = async (event) => {
    event.preventDefault();
  };

  const EnterSubmit = (e) => {
    if (e.code === "Enter") register(e);
  };

  const encodeImage = (Image) => {
    const reader = new FileReader();
    reader.readAsDataURL(Image[0]);
    reader.onload = () => {
      setImages(reader.result);
    };
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  return (
    <StyledCreateRestaurant>
      <RestaurantForm onSubmit={() => createRestaurant()}>
        <RestaurantFormInput
          placeholder="Name"
          value={title}
          type="Text"
          label="Text"
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
          required
        />

        <RestaurantFormInputImageButton
          onClick={() => fileInput.current.click()}
        >
          Choose File
        </RestaurantFormInputImageButton>

        <RestaurantFormInputImage
          required
          ref={fileInput}
          type="file"
          name="image"
          style={{ display: "none" }}
          onChange={(e) => {
            setImages(null);
            setPreview(null);
            previewFile(e.target.files);
            encodeImage(e.target.files);
          }}
        />

        {preview && (
          <img src={preview} alt="chosen" style={{ height: "300px" }} />
        )}
        <RestaurantFormInput
          placeholder="Address"
          value={location}
          required
          type="Text"
          label="Text"
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <RestaurantFormInput
          placeholder="Contact"
          value={contact}
          required
          type="Text"
          label="Text"
          onChange={(e) => setContact(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <RestaurantFormInputDesc
          placeholder="Tell Us About Them"
          value={description}
          type="Text"
          required
          label="Text"
          onChange={(e) => setDescription(e.target.value)}
          onKeyPress={(e) => EnterSubmit(e)}
        />
        <AddRestaurantButton type="submit">
          {/* onClick={(e) => createRestaurant(e)} */}
          Add Restaurant
        </AddRestaurantButton>
      </RestaurantForm>
    </StyledCreateRestaurant>
  );
}
