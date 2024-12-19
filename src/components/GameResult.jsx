import { useContext, useEffect, useState } from "react";
import GameButton from "./GameButton";
import { ScoreContext } from "../contexts/ScoreProvider";
import { getGameResult } from "../utils/getGameResult";
import { updateScore } from "../utils/updateScore";

const choices = ["rock", "paper", "scissors"];

export default function GameResult({ playerChoice, setPlayerChoice }) {
  const [houseChoice, setHouseChoice] = useState("");
  const [result, setResult] = useState("");

  const { setScore } = useContext(ScoreContext);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      setHouseChoice(choices[randomIndex]);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (houseChoice === "") return;

    const gameResult = getGameResult(playerChoice, houseChoice);
    setResult(gameResult);
    updateScore(gameResult, setScore);
  }, [houseChoice]);

  return (
    <section>
      <div className="relative flex items-stretch justify-center gap-16">
        <article className="text-center">
          <h2 className="text-2xl uppercase mb-6">You picked</h2>
          <GameButton choice={playerChoice} isWinner={result === "You win"} />
        </article>
        {result !== "" && (
          <article className="self-center text-center">
            <h2 className="text-5xl mb-4 uppercase">{result}</h2>
            <button
              className="bg-white text-[var(--text)] hover:text-red-400 tracking-widest uppercase px-12 py-2 rounded-lg"
              onClick={() => setPlayerChoice("")}
            >
              Play again
            </button>
          </article>
        )}
        <article className="text-center">
          <h2 className="text-2xl uppercase mb-6">The house picked</h2>
          {houseChoice === "" ? (
            <div className="animate-pulse size-32 mx-auto translate-y-4 bg-black/25 rounded-full"></div>
          ) : (
            <GameButton choice={houseChoice} isWinner={result === "You lose"} />
          )}
        </article>
      </div>
    </section>
  );
}
