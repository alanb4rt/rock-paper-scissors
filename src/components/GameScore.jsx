import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreProvider";

export default function GameScore() {
  const { score } = useContext(ScoreContext);

  return (
    <section className="flex flex-col items-center py-4 px-12 rounded-lg bg-white text-[var(--text)]">
      <p className="font-semibold tracking-widest">Score</p>
      <p className="text-6xl">{score}</p>
    </section>
  );
}
