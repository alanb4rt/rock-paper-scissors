import GameButton from "./GameButton";

export default function GameStart({ handleChoice }) {
  return (
    <>
      <div className="relative max-w-[22rem] sm:max-w-[28rem] mx-auto">
        <div className="game-area grid grid-cols-2 gap-6">
          <GameButton choice="paper" handleChoice={handleChoice} />
          <GameButton choice="scissors" handleChoice={handleChoice} />
          <GameButton choice="rock" handleChoice={handleChoice} />
        </div>
      </div>
    </>
  );
}
