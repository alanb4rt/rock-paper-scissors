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

    const timeoutId = setTimeout(() => {
      const gameResult = getGameResult(playerChoice, houseChoice);
      setResult(gameResult);
      updateScore(gameResult, setScore);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [houseChoice]);

  return (
    <section>
      <div className="max-w-screen-lg mx-auto">
        <div
          className={`relative grid grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-x-8 sm:gap-x-16 ${
            result !== "" ? "sm:grid-cols-[1fr,auto,1fr]" : ""
          }`}
        >
          <article className="justify-self-end text-center">
            <h2 className="text-2xl uppercase mb-6">You picked</h2>
            <GameButton choice={playerChoice} isWinner={result === "You win"} />
          </article>
          <article className="justify-self-start text-center sm:order-last">
            <h2 className="text-2xl uppercase mb-6">The house picked</h2>
            {houseChoice === "" ? (
              <div className="animate-pulse size-32 mx-auto translate-y-4 bg-black/25 rounded-full"></div>
            ) : (
              <GameButton
                choice={houseChoice}
                isWinner={result === "You lose"}
              />
            )}
          </article>
          {result !== "" && (
            <article className="col-span-2 sm:col-auto self-center text-center">
              <h2 className="text-5xl mb-4 uppercase">{result}</h2>
              <button
                className="bg-white text-[var(--text)] hover:text-red-400 tracking-widest uppercase px-12 py-2 rounded-lg"
                onClick={() => setPlayerChoice("")}
              >
                Play again
              </button>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
