import { createContext, useEffect, useState } from "react";

export const ScoreContext = createContext(0);

export default function ScoreProvider({ children }) {
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem("score");
    return storedScore ? Number(storedScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
