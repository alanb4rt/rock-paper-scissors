import GameButton from "./GameButton";

export default function GameBoard() {
  return (
    <section>
      <div className="relative max-w-[28rem] mx-auto">
        <div className="game-area flex items-center justify-between gap-6 flex-wrap">
          <GameButton choice="paper" />
          <GameButton choice="scissors" />
          <GameButton choice="rock" />
        </div>
      </div>
    </section>
  );
}
