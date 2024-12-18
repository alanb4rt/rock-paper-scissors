import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import RulesModal from "./components/RulesModal";
import ScoreProvider from "./contexts/ScoreProvider";

export default function App() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <ScoreProvider>
        <Header />
        <GameBoard />
      </ScoreProvider>
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
