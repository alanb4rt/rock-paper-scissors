import iconClose from "../assets/images/icon-close.svg";
import rulesImage from "../assets/images/image-rules.svg";

export default function RulesModal({ onClose }) {
  return (
    <section className="fixed inset-0 grid place-content-center bg-black/50">
      <article className="relative p-8 bg-white text-[var(--text)] rounded-lg">
        <header className="flex items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold uppercase leading-none">Rules</h2>
          <button type="button" onClick={onClose}>
            <img src={iconClose} alt="Close icon" />
          </button>
        </header>
        <img className="w-full p-4" src={rulesImage} alt="Game rules" />
      </article>
    </section>
  );
}
