import logo from "../assets/images/logo.svg";
import GameScore from "./GameScore";

export default function Header() {
  return (
    <header>
      <div className="max-w-screen-md mx-auto py-8 px-6">
        <div className="flex items-center justify-between gap-8 p-3 sm:py-4 sm:px-5 border-[3px] border-white/50 rounded-lg sm:rounded-2xl font-bold uppercase">
          <img className="w-24 sm:w-40 ml-2" src={logo} alt="Logo" />
          <GameScore />
        </div>
      </div>
    </header>
  );
}
