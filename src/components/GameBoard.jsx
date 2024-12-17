import { useState } from "react";
import GameStart from "./GameStart";

export default function GameBoard() {
  const [playerChoice, setPlayerChoice] = useState("");

  const handleChoice = (choice) => {
    console.log(choice);
    setPlayerChoice(choice);
  };

  return (
    <>
      <GameStart handleChoice={handleChoice} />
    </>
  );
}
