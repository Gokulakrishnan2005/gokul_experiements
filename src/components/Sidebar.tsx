import { ReactNode } from "react";
import { UserCircle, Home, Flame, Bookmark, Clapperboard, Settings, X } from "lucide-react";
import { NavLink } from "react-router";

export function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  return (
    <nav className={`fixed inset-y-0 left-0 z-[60] w-64 bg-surface-container border-r-4 border-surface-container-highest border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 pt-12 lg:p-8 border-b-4 border-black bg-primary relative">
        {onClose && (
          <button onClick={onClose} className="absolute top-4 right-4 lg:hidden text-black hover:text-black/70">
            <X className="w-6 h-6" />
          </button>
        )}
        <img 
          src="/gokul-dp.jpeg" 
          alt="Gokul DP" 
          className="w-24 h-24 object-cover border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4" 
        />
        <h2 className="font-headline text-2xl uppercase tracking-widest text-black font-black italic">
          GOKUL
        </h2>
        <p className="font-bold text-sm text-black opacity-80">Creator & Host</p>
      </div>
      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
        <div className="flex flex-col gap-2 mb-4">
          <NavItem to="/" icon={<Home className="w-6 h-6" />} label="Home" active />
          <NavItem to="/trending" icon={<Flame className="w-6 h-6" />} label="Trending" />
          <NavItem to="/watchlist" icon={<Bookmark className="w-6 h-6" />} label="Watchlist" />
        </div>
        
        <div className="mt-auto pt-4 border-t-2 border-[#353436]">
          <button className="w-full flex items-center p-2 border-2 border-black bg-primary hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all gap-3 text-left">
            <img 
              src="/creator-gokul.jpg" 
              alt="Gokul" 
              className="w-16 h-20 object-cover border-2 border-black" 
            />
            <div className="flex flex-col">
              <span className="font-headline font-black italic uppercase text-black text-sm">Gokul</span>
              <span className="font-body text-xs text-black font-bold opacity-80">Host</span>
            </div>
          </button>
        </div>
      </div>
      <div className="p-6 border-t-4 border-black bg-surface-container-high mt-auto">
        <a href="https://x.com/gokula2005" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-secondary-container text-white font-bold font-headline uppercase tracking-widest py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          Follow
        </a>
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label, active }: { to?: string; icon: ReactNode; label: string; active?: boolean }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 m-1 font-bold text-sm uppercase tracking-widest transition-all ${
          isActive
            ? "bg-primary-container text-on-primary-container border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] scale-[0.98]"
            : "text-on-surface-variant hover:bg-surface-container-highest hover:text-white hover:border-2 hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        }`
      }
    >
      <span className="mr-3">{icon}</span>
      {label}
    </NavLink>
  );
}
