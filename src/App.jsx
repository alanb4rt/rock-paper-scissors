import { useState } from "react";
import Game from "./components/Game";
import Header from "./components/Header";
import RulesModal from "./components/RulesModal";

export default function App() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <Header />
      <Game />
      <button
        className="fixed bottom-8 right-8 bg-transparent border border-white rounded-lg px-8 py-2 tracking-widest uppercase"
        onClick={() => setShowRules(true)}
      >
        Rules
      </button>
      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </>
  );
}
