const choices = {
  rock: "var(--rock-gradient)",
  scissors: "var(--scissors-gradient)",
  paper: "var(--paper-gradient)",
};

export default function GameButton({ choice, handleChoice, isWinner }) {
  const btnColor = choices[choice];

  return (
    <button
      className={`relative mx-auto p-5 rounded-full ${
        isWinner ? "winner" : ""
      }`}
      style={{ background: btnColor }}
      onClick={handleChoice ? () => handleChoice(choice) : undefined}
    >
      <div className="grid place-content-center bg-white p-8 rounded-full">
        <img
          className="size-16 object-contain"
          src={`./src/assets/images/icon-${choice}.svg`}
          alt={`Icon ${choice}`}
        />
      </div>
    </button>
  );
}
