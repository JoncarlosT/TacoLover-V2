import styled from "styled-components";

export const StyledCreateRestaurant = styled.div``;

export const RestaurantForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RestaurantFormInput = styled.input`
  margin: 7px;
  padding: 10px;
  border-radius: 25px;
  border-color: white;
  width: 400px;
  font-size: 1.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-color: white;
  border-radius: 5px;
  color: white;
`;

export const RestaurantFormInputImage = styled.input``;

export const RestaurantFormInputDesc = styled.textarea`
  color: white;
  width: 400px;
  height: 150px;
  font-size: 2rem;
  border-color: white;
  border-radius: 5px;
  font-family: Nunito;
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const AddRestaurantButton = styled.div`
  display: flex;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin-top: 20px;
  border-radius: 0.12em;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  :hover {
    color: #000000;
    background-color: #ffffff;
  }
`;
