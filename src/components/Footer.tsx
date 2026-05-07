export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-8 gap-6 bg-surface-container-lowest border-t-4 border-black mt-auto">
      <div className="font-headline text-primary text-2xl font-black italic tracking-tighter uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        Synthetic
      </div>
      <nav className="flex flex-wrap justify-center gap-6">
        <a href="#" className="text-on-surface-variant hover:text-white font-bold text-sm uppercase hover:tracking-widest transition-all">
          Legal Docs
        </a>
        <a href="#" className="text-on-surface-variant hover:text-white font-bold text-sm uppercase hover:tracking-widest transition-all">
          Satellite Feeds
        </a>
        <a href="#" className="text-on-surface-variant hover:text-white font-bold text-sm uppercase hover:tracking-widest transition-all">
          Join the Resistance
        </a>
        <a href="#" className="text-on-surface-variant hover:text-white font-bold text-sm uppercase hover:tracking-widest transition-all">
          Support
        </a>
      </nav>
      <div className="text-[#b0c7f1] font-bold text-sm uppercase text-center md:text-right">
        © 1993 CINE-COMIC MEDIA GROUP. NO REFUNDS IN THE WASTELAND.
      </div>
    </footer>
  );
}
