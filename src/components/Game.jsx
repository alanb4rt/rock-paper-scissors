import GameButton from "./GameButton";

export default function Game() {
  return (
    <section>
      <div className="relative max-w-[28rem] mx-auto">
        <div className="game-area flex items-center justify-between gap-6 flex-wrap">
          <GameButton choice="paper" color="var(--paper-gradient)" />
          <GameButton choice="scissors" color="var(--scissors-gradient)" />
          <GameButton choice="rock" color="var(--rock-gradient)" />
        </div>
      </div>
    </section>
  );
}
