import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid purple;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  margin: 10px auto;
`;

export const Button = styled.button`
  border: 1px solid purple;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  margin: 10px auto;
  color: purple;
  background-color: transparent;
`;

export const Label = styled.label`
  color: purple;
  font-weight: bold;
`;
