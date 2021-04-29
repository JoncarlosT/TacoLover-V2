import styled from "styled-components";

export const StyledRegisterForm = styled.div``;

export const UserRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextHeader = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin: 15px;
  color: white;
`;

export const RegisterInput = styled.input`
  margin: 7px;
  padding: 10px;
  border-radius: 25px;
  border: none;
  width: 250px;
`;

export const RegisterButton = styled.div`
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

export const ErrorMessage = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: hotpink;
`;
