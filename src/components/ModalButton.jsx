import { useState } from "react";
import RulesModal from "./RulesModal";

export default function ModalButton() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-8 left-8 sm:left-auto right-8 w-fit mx-auto border border-white rounded-lg px-8 py-2 tracking-widest uppercase"
        onClick={() => setShowRules(true)}
      >
        Rules
      </button>
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </>
  );
}
