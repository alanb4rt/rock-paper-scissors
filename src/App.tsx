import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import ScoreProvider from "./contexts/ScoreProvider";
import ModalButton from "./components/ModalButton";

export default function App() {
  return (
    <>
      <ScoreProvider>
        <Header />
        <GameBoard />
      </ScoreProvider>
      <ModalButton />
    </>
  );
}
