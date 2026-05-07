import { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col lg:ml-64 w-full min-h-screen">
        <TopBar onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <main className="flex-1 p-4 lg:p-8 flex flex-col gap-6 bg-[#1b1b1c]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
