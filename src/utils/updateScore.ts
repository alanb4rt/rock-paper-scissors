import { Dispatch, SetStateAction } from "react";
import { GameResult } from "../types/game.types";

export const updateScore = (
  result: GameResult,
  setScore: Dispatch<SetStateAction<number>>
) => {
  switch (result) {
    case "You win":
      setScore((prev) => prev + 1);
      break;
    case "You lose":
      setScore((prev) => (prev > 0 ? prev - 1 : 0));
      break;
    case "Draw":
      break;
  }
};
