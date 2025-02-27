import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import GameButton from "./GameButton";
import GameButtonSkeleton from "./GameButtonSkeleton";
import { ScoreContext } from "../contexts/ScoreProvider";
import { getGameResult } from "../utils/getGameResult";
import { updateScore } from "../utils/updateScore";
import { NORMAL_CHOICES } from "../data/choices";
import { GameChoice, GameResult } from "../types/game.types";

interface GameResultProps {
  playerChoice: GameChoice,
  setPlayerChoice: Dispatch<SetStateAction<GameChoice | null>>
}

export default function GameResultBoard({ playerChoice, setPlayerChoice }: GameResultProps) {
  const [houseChoice, setHouseChoice] = useState<GameChoice | null>(null);
  const [result, setResult] = useState<GameResult | null>(null);

  const scoreContext = useContext(ScoreContext);
  const setScore = scoreContext ? scoreContext.setScore : () => {};

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * NORMAL_CHOICES.length);
      setHouseChoice(NORMAL_CHOICES[randomIndex]);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!houseChoice) return;

    const timeoutId = setTimeout(() => {
      const gameResult = getGameResult(playerChoice, houseChoice);
      setResult(gameResult);
      updateScore(gameResult, setScore);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [houseChoice]);

  return (
    <div className="max-w-screen-lg mx-auto">
      <div
        className={`game-result relative grid grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-x-8 sm:gap-x-16 ${
          result ? "sm:grid-cols-[1fr,auto,1fr]" : ""
        }`}
      >
        <article className="card sm:justify-self-end">
          <GameButton choice={playerChoice} isWinner={result === "You win"} />
          <h2 className="sm:text-2xl uppercase tracking-widest">
            You picked
          </h2>
        </article>
        <article className="card sm:justify-self-start sm:order-last">
          {!houseChoice ? (
            <GameButtonSkeleton />
          ) : (
            <GameButton
              choice={houseChoice}
              isWinner={result === "You lose"}
            />
          )}
          <h2 className="sm:text-2xl uppercase tracking-widest">
            The house picked
          </h2>
        </article>
        {result && (
          <article className="col-span-2 sm:col-auto self-center text-center">
            <h2 className="text-5xl mb-4 uppercase">{result}</h2>
            <button
              className="bg-white text-[var(--text)] hover:text-red-400 tracking-widest uppercase px-12 py-2 rounded-lg"
              onClick={() => setPlayerChoice(null)}
            >
              Play again
            </button>
          </article>
        )}
      </div>
    </div>
  );
}
