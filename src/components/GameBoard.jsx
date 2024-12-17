import { useState } from "react";
import GameStart from "./GameStart";
import GameResult from "./GameResult";

export default function GameBoard() {
  const [playerChoice, setPlayerChoice] = useState("");

  const handleChoice = (choice) => {
    console.log(choice);
    setPlayerChoice(choice);
  };

  return (
    <>
      {playerChoice === "" ? (
        <GameStart handleChoice={handleChoice} />
      ) : (
        <GameResult
          playerChoice={playerChoice}
          setPlayerChoice={setPlayerChoice}
        />
      )}
    </>
  );
}
