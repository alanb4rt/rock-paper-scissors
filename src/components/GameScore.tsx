import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreProvider";

export default function GameScore() {  
  const scoreContext = useContext(ScoreContext);
  const score = scoreContext ? scoreContext.score : 0;

  return (
    <section className="flex flex-col items-center p-2 sm:py-3 px-6 sm:px-12 rounded sm:rounded-lg bg-white text-[var(--text)]">
      <p className="text-[var(--text-score)] text-xs sm:text-base font-semibold tracking-widest">
        Score
      </p>
      <p className="text-4xl sm:text-6xl">{score}</p>
    </section>
  );
}
