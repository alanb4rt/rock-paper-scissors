import { GameChoice, GameResult } from "../types/game.types";

export const getGameResult = (
  playerChoice: GameChoice,
  houseChoice: GameChoice
): GameResult => {
  if (playerChoice === houseChoice) return "Draw";

  const result =
    (playerChoice === "rock" && houseChoice === "scissors") ||
    (playerChoice === "paper" && houseChoice === "rock") ||
    (playerChoice === "scissors" && houseChoice === "paper")
      ? "You win"
      : "You lose";

  return result;
};
