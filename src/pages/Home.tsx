import { Link } from "react-router";
import { Flame } from "lucide-react";

export function Home() {
  return (
    <>
      <section className="halftone-bg comic-border comic-shadow p-6 lg:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[400px]">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-2xl text-white">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-primary text-black font-bold text-xs lg:text-sm border-2 border-black mb-4 uppercase tracking-widest transform -rotate-2">
            World Premiere
          </div>
          <h2 className="font-headline text-4xl lg:text-6xl md:text-5xl leading-none font-black italic tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] lg:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-4">
            Mastering Claude 3.5 Sonnet
          </h2>
          <p className="font-body text-base lg:text-lg bg-black text-white p-2 inline-block border-2 border-white mb-8">
            Unlock the full potential of Anthropic's most powerful model yet. From coding to creative writing, learn how to push Claude to its limits.
          </p>
          <br />
          <Link to="/video/claude-3-5" className="inline-block bg-primary-container text-black font-headline text-xl lg:text-2xl border-4 border-black px-6 py-3 lg:px-8 lg:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none transition-all uppercase italic">
            WATCH NOW
          </Link>
        </div>
        <div className="relative z-10 w-full md:w-1/3 mt-8 md:mt-0">
          <div className="w-full aspect-[3/4] bg-surface-container comic-border comic-shadow overflow-hidden transform rotate-3">
            <img
              alt="Cyberpunk city street"
              className="w-full h-full object-cover grayscale contrast-150 mix-blend-luminosity opacity-80"
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-2">
          <Flame className="w-10 h-10 text-secondary" strokeWidth={2.5} />
          <h3 className="font-headline text-3xl uppercase font-black italic text-white">
            Trending Now
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <VideoCard
            id="claude-3-5"
            title="Mastering Claude 3.5 Sonnet"
            desc="A comprehensive guide to prompt engineering and advanced workflows with Claude."
            match="98% Match"
            tag="NEW RELEASE"
            tagColor="bg-secondary"
            imgUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
          />
          <VideoCard
            id="chatgpt-zapier"
            title="ChatGPT + Zapier: Automating Growth"
            desc="Build autonomous social media agents that create, schedule, and engage with your audience 24/7."
            match="85% Match"
            tag="AUTOMATION"
            tagColor="bg-primary-container"
            imgUrl="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
          />
          <VideoCard
            id="midjourney-v6"
            title="Midjourney v6: Photo-Realism"
            desc="Master the latest parameters and prompting structures for ultra-realistic image generation."
            match="92% Match"
            tag="PRO SECRETS"
            tagColor="bg-[#c8dbff]"
            imgUrl="https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </section>
    </>
  );
}

function VideoCard({ id, title, desc, match, tag, tagColor, imgUrl }: any) {
  return (
    <article className="bg-[#1f1f20] comic-border comic-shadow flex flex-col group relative">
      <div className="absolute -top-4 -right-4 z-20">
        <div className={`relative inline-flex items-center justify-center px-4 py-2 ${tagColor} text-black font-bold text-xs lg:text-sm uppercase border-4 border-black transform rotate-6`}>
          <span>{tag}</span>
          <div className={`absolute -bottom-2 ${tagColor === 'bg-secondary' ? 'left-4' : 'right-4'} w-4 h-4 ${tagColor} border-b-4 border-r-4 border-black rotate-45 -z-10`}></div>
        </div>
      </div>
      <Link to={`/video/${id}`} className="h-48 border-b-4 border-black relative overflow-hidden bg-black block">
        <img
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500 grayscale contrast-125"
          src={imgUrl}
        />
      </Link>
      <div className="p-6 flex flex-col flex-1 bg-[#2a2a2b]">
        <Link to={`/video/${id}`}>
          <h4 className="font-headline text-2xl uppercase font-black text-white mb-2">{title}</h4>
        </Link>
        <p className="font-body text-[#d0c6ab] mb-6 line-clamp-2">{desc}</p>
        <div className="mt-auto flex justify-between items-center border-t-2 border-black pt-4">
          <span className="font-bold text-primary-container text-sm uppercase tracking-widest">{match}</span>
          <Link to={`/video/${id}`} className="bg-primary text-black border-2 border-black px-4 py-1 font-bold text-sm uppercase comic-btn-hover shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Play
          </Link>
        </div>
      </div>
    </article>
  );
}
