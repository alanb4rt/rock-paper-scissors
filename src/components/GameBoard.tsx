import { useState } from "react";
import GameStart from "./GameStart";
import GameResultBoard from "./GameResultBoard";
import { GameChoice } from "../types/game.types";

export default function GameBoard() {
  const [playerChoice, setPlayerChoice] = useState<GameChoice | null>(null);

  const handleChoice = (choice: GameChoice) => {
    setPlayerChoice(choice);
  };

  return (
    <section>
      {!playerChoice ? (
        <GameStart handleChoice={handleChoice} />
      ) : (
        <GameResultBoard
          playerChoice={playerChoice}
          setPlayerChoice={setPlayerChoice}
        />
      )}
    </section>
  );
}
