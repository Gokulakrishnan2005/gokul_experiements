import { Flame } from "lucide-react";
import { VIDEOS } from "../data/videos";
import { VideoCard } from "./Home";

export function Trending() {
  const trendingVideos = Object.values(VIDEOS).filter((video) => video.isTrending);

  return (
    <>
      <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
        <Flame className="w-10 h-10 text-secondary-container" strokeWidth={2.5} />
        <div>
          <h2 className="font-headline text-3xl lg:text-4xl uppercase font-black italic text-white leading-none">
            Trending Now
          </h2>
          <p className="font-body text-[#d0c6ab] mt-1 font-bold">
            The hottest automated systems and guides this week.
          </p>
        </div>
      </div>

      {trendingVideos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-4 border-dashed border-[#4d4732] bg-surface-container">
          <Flame className="w-16 h-16 text-[#4d4732] mb-4" />
          <h3 className="font-headline text-2xl uppercase font-black text-white mb-2">Nothing trending currently</h3>
          <p className="font-body text-[#d0c6ab]">
            Check back later for the next viral automation guide.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {trendingVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              desc={video.shortDesc}
              match="Trending"
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
