import GameButton from "./GameButton";
import { NORMAL_CHOICES } from "../data/choices";

export default function GameStart({ handleChoice }) {
  return (
    <>
      <div className="relative max-w-[22rem] sm:max-w-[28rem] mx-auto">
        <div className="game-area grid grid-cols-2 gap-6">
          {NORMAL_CHOICES.map((choice) => (
            <GameButton
              key={choice}
              choice={choice}
              handleChoice={handleChoice}
            />
          ))}
        </div>
      </div>
    </>
  );
}
