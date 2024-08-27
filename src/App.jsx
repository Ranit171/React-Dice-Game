import { useState } from "react";
import "./App.css";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame handle={handleGamePlay} />}</>
  );
}

export default App;
