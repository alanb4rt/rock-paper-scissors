export default function GameButton({ choice, color }) {
  return (
    <button
      className="relative mx-auto p-5 rounded-full"
      style={{ background: color }}
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
