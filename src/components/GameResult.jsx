import GameButton from "./GameButton";

export default function GameResult() {
  return (
    <section>
      <div className="relative flex items-stretch justify-center gap-16">
        <article className="text-center">
          <h2 className="text-2xl uppercase mb-6">You picked</h2>
          <GameButton choice="paper" />
        </article>
        <article className="text-center">
          <h2 className="text-2xl uppercase mb-6">The house picked</h2>
          <div className="animate-pulse size-32 mx-auto translate-y-4 bg-black/25 rounded-full"></div>
        </article>
      </div>
    </section>
  );
}
