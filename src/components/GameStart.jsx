import GameButton from "./GameButton";

export default function GameStart({ handleChoice }) {
  return (
    <section>
      <div className="relative max-w-[28rem] mx-auto">
        <div className="game-area flex items-center justify-between gap-6 flex-wrap">
          <GameButton choice="paper" handleChoice={handleChoice} />
          <GameButton choice="scissors" handleChoice={handleChoice} />
          <GameButton choice="rock" handleChoice={handleChoice} />
        </div>
      </div>
    </section>
  );
}
