import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="max-w-screen-md mx-auto py-8">
        <div className="flex items-center justify-between gap-8 p-4 border-4 border-white/50 rounded-2xl font-bold uppercase">
          <img src={logo} alt="Logo" />
          <section className="flex flex-col items-center py-4 px-12 rounded-lg bg-white text-[var(--text)]">
            <p className="font-semibold tracking-widest">Score</p>
            <p className="text-6xl">12</p>
          </section>
        </div>
      </div>
    </header>
  );
}
