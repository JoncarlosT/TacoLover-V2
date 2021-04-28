import styled from "styled-components";

export const StyledLoginForm = styled.div`
  padding-top: 20px;
  display: flex;
`;

export const LoginFrom = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled.input`
  margin: 20px;
  padding: 10px;
  border-radius: 25px;
  border: none;
  width: 250px;
`;

export const LoginButton = styled.div`
  display: flex;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  width: 40px;
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
