import { getImageURL } from "../utils/getImageURL";

export default function GameButton({ choice, handleChoice, isWinner }) {
  const imgURL = getImageURL(`icon-${choice}.svg`);

  return (
    <button
      className="mx-auto rounded-full shadow-xl last:col-span-2"
      onClick={handleChoice ? () => handleChoice(choice) : undefined}
    >
      <div className={`token token-${choice} ${isWinner ? "winner" : ""}`}>
        <div className="grid place-content-center bg-white p-6 sm:p-8 rounded-full shadow-[inset_0_6px_0_hsla(225_25_75/.5)] sm:shadow-[inset_0_8px_0_hsla(225_25_75/.5)]">
          <img
            className="size-12 sm:size-16 object-contain"
            src={imgURL}
            alt={`${choice} icon`}
          />
        </div>
      </div>
    </button>
  );
}
