import logo from "../assets/images/logo.svg";
import GameScore from "./GameScore";

export default function Header() {
  return (
    <header>
      <div className="max-w-screen-md mx-auto py-8">
        <div className="flex items-center justify-between gap-8 p-4 border-4 border-white/50 rounded-2xl font-bold uppercase">
          <img src={logo} alt="Logo" />
          <GameScore />
        </div>
      </div>
    </header>
  );
}
