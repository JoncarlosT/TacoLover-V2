import styled from "styled-components";

export const StyledCreateRestaurant = styled.div``;

export const RestaurantForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
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

export const RestaurantFormInputImage = styled.input`
  && {
    color: red;
  }
`;

export const RestaurantFormInputImageButton = styled.div`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

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

export const AddRestaurantButton = styled.button`
  font-family: Nunito;
  font-size: 1rem;
  padding: 0.35em 1.2em;
  margin: 20px;
  background-color: transparent;
  color: white;
  border: 0.1em solid #ffffff;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 0.12em;

  :hover {
    color: #000000;
    background-color: #ffffff;
  }
`;
