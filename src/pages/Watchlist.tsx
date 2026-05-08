import { Bookmark } from "lucide-react";
import { useWatchlist } from "../hooks/useWatchlist";
import { VIDEOS } from "../data/videos";
import { VideoCard } from "./Home";

export function Watchlist() {
  const { watchlist } = useWatchlist();

  const watchlistVideos = watchlist
    .map((id) => VIDEOS[id as keyof typeof VIDEOS])
    .filter(Boolean);

  return (
    <>
      <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
        <Bookmark className="w-10 h-10 text-primary-container" strokeWidth={2.5} />
        <div>
          <h2 className="font-headline text-3xl lg:text-4xl uppercase font-black italic text-white leading-none">
            Your Watchlist
          </h2>
          <p className="font-body text-[#d0c6ab] mt-1 font-bold">
            Saved prompts and system guides for quick access.
          </p>
        </div>
      </div>

      {watchlistVideos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-4 border-dashed border-[#4d4732] bg-surface-container">
          <Bookmark className="w-16 h-16 text-[#4d4732] mb-4" />
          <h3 className="font-headline text-2xl uppercase font-black text-white mb-2">Nothing saved yet</h3>
          <p className="font-body text-[#d0c6ab]">
            Explore the prompts and click "Add to Watchlist" to save them here locally.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {watchlistVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              desc={video.shortDesc}
              match="Saved"
              tag={video.tag1}
              tagColor="bg-primary"
              imgUrl={video.imgUrl}
            />
          ))}
        </div>
      )}
    </>
  );
}
