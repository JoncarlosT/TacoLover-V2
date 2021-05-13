import styled from "styled-components";

export const StyledCreateRestaurant = styled.div``;

export const RestaurantForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RestaurantFormInput = styled.textarea`
  color: white;
  width: 400px;
  height: 80px;
  font-size: 2rem;
  border-color: white;
  border-radius: 5px;
  font-family: Nunito;
  background: rgba(0, 0, 0, 0.5);
  margin: 20px;
  text-align: center;
  ::placeholder {
    color: white;
  }

  @media (max-width: 407px) {
    width: 90vw;
  }
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

  ::placeholder {
    color: white;
    text-align: center;
  }

  @media (max-width: 407px) {
    width: 90vw;
  }
`;

export const AddRestaurantButton = styled.div`
  display: flex;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  border-radius: 0.12em;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  margin: 20px;
  :hover {
    color: #000000;
    background-color: #ffffff;
  }
`;
