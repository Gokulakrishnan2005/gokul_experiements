import { Link } from "react-router";
import { Film, Menu, Youtube, Twitter } from "lucide-react";

export function TopBar({ onToggleMenu }: { onToggleMenu: () => void }) {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 sticky top-0 z-50 bg-[#131314] lg:bg-[#131314]/90 backdrop-blur-sm border-b-4 border-surface-container-highest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-black">
      <div className="flex items-center gap-4">
        <Film className="w-9 h-9 text-primary-container" strokeWidth={2.5} />
        <Link to="/">
          <h1 className="font-headline text-2xl lg:text-3xl font-black italic tracking-tighter text-primary-container lg:text-primary uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Gokul Experiments
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <nav className="flex gap-6 items-center">
          <a
            href="https://www.youtube.com/@GokulExperiments"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant font-bold text-sm uppercase hover:text-[#FF0000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://x.com/gokula2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant font-bold text-sm uppercase hover:text-[#1DA1F2] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </a>
        </nav>
        <a 
          href="https://www.youtube.com/@GokulExperiments" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#FF0000] text-white font-bold text-sm border-2 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] comic-btn-hover uppercase tracking-widest inline-block text-center"
        >
          Subscribe
        </a>
      </div>
      <div className="md:hidden">
        <button className="text-primary-container" onClick={onToggleMenu}>
          <Menu className="w-8 h-8" />
        </button>
      </div>
    </header>
  );
}
