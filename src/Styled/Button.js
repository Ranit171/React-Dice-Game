import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  min-width: 220px;
  height: 44px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
