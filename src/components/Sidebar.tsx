import { ReactNode } from "react";
import { UserCircle, Home, Flame, Bookmark, Clapperboard, Settings, X } from "lucide-react";
import { NavLink } from "react-router";

export function Sidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  return (
    <nav className={`fixed inset-y-0 left-0 z-40 w-64 bg-surface-container border-r-4 border-surface-container-highest border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-8 border-b-4 border-black bg-primary relative">
        {onClose && (
          <button onClick={onClose} className="absolute top-4 right-4 lg:hidden text-black hover:text-black/70">
            <X className="w-6 h-6" />
          </button>
        )}
        <UserCircle className="w-12 h-12 text-black mb-2" strokeWidth={1.5} />
        <h2 className="font-headline text-2xl uppercase tracking-widest text-black font-black italic">
          OPERATIVE_01
        </h2>
        <p className="font-bold text-sm text-black opacity-80">Level 99 Critic</p>
      </div>
      <div className="flex-1 flex flex-col p-2 gap-2 mt-4 overflow-y-auto">
        <NavItem to="/" icon={<Home />} label="Home" />
        <NavItem to="/trending" icon={<Flame />} label="Trending" />
        <NavItem to="/watchlist" icon={<Bookmark />} label="Watchlist" />
        <NavItem to="/studios" icon={<Clapperboard />} label="Studios" />
        <NavItem to="/settings" icon={<Settings />} label="Settings" />
      </div>
      <div className="p-8 border-t-4 border-black bg-surface-container-highest">
        <button className="w-full bg-secondary-container text-white border-2 border-black p-3 font-headline text-base font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] comic-btn-hover transition-transform">
          UPGRADE TO PRO
        </button>
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: ReactNode; label: string }) {
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
