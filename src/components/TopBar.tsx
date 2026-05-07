import { Link } from "react-router";
import { Film, Menu } from "lucide-react";

export function TopBar({ onToggleMenu }: { onToggleMenu: () => void }) {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-50 bg-[#131314] lg:bg-[#131314]/90 backdrop-blur-sm border-b-4 border-surface-container-highest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-black">
      <div className="flex items-center gap-4">
        <Film className="w-9 h-9 text-primary-container" strokeWidth={2.5} />
        <Link to="/">
          <h1 className="font-headline text-4xl lg:text-5xl font-black italic tracking-tighter text-primary-container lg:text-primary uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Synthetic
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <nav className="flex gap-6 items-center">
          <Link
            to="/latest"
            className="text-on-surface-variant font-bold text-sm uppercase hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Latest
          </Link>
          <Link
            to="/trending"
            className="text-primary-container font-black border-b-4 border-primary-container pb-1 text-sm uppercase scale-95 transition-transform"
          >
            Action
          </Link>
          <Link
            to="/classics"
            className="text-on-surface-variant font-bold text-sm uppercase hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Classics
          </Link>
          <Link
            to="/mylist"
            className="text-on-surface-variant font-bold text-sm uppercase hover:text-primary hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            My List
          </Link>
        </nav>
        <button className="bg-primary-container text-black font-bold text-sm border-2 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] comic-btn-hover uppercase tracking-widest">
          Sign In
        </button>
      </div>
      <div className="md:hidden">
        <button className="text-primary-container" onClick={onToggleMenu}>
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}
