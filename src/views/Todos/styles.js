import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  display: flex;
  margin: 10px auto;
  border: 1px solid purple;
  border-radius: 10px;
  height: 800px;
  padding: 20px;
`;

export const TodoCard = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  border: 1px solid purple;
  margin: 10px;
  border-radius: 10px;
  height: fit-content;
`;
