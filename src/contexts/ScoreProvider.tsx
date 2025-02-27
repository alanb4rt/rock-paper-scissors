import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface ScoreContextType {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

interface ScoreProviderProps {
  children: ReactNode
}

export const ScoreContext = createContext<ScoreContextType | 0>(0);

export default function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem("score");
    return storedScore ? Number(storedScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
