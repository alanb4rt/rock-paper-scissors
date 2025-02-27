import iconClose from "../assets/images/icon-close.svg";
import rulesImage from "../assets/images/image-rules.svg";

interface RulesModalProps {
  onClose: () => void
}

export default function RulesModal({ onClose }: RulesModalProps) {
  return (
    <section className="fixed inset-0 grid sm:place-content-center bg-black/50">
      <article className="relative flex flex-col justify-between items-center gap-4 sm:block py-16 px-8 sm:p-8 bg-white text-[var(--text)] sm:rounded-lg">
        <h2 className="text-center sm:text-left mt-8 sm:mt-0 sm:mb-4 text-3xl font-bold uppercase leading-none">
          Rules
        </h2>
        <img className="w-full p-4" src={rulesImage} alt="Game rules" />
        <button
          className="sm:absolute top-[2rem] right-[2rem] m-1"
          type="button"
          onClick={onClose}
        >
          <img src={iconClose} alt="Close icon" />
        </button>
      </article>
    </section>
  );
}
