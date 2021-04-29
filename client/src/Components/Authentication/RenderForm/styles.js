import styled from "styled-components";

export const StyledRenderForm = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 30px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  width: inherit;
`;

export const FormButton = styled.div`
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
