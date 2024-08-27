import React from "react";
import styled from "styled-components";
import { Button } from "../Styled/Button";

const StartGame = ({ handle }) => {
  return (
    <Container>
      <div>
        <img src="/public/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={handle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
