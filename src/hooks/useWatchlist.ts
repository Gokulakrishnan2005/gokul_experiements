import { useState, useEffect } from "react";

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    const saved = localStorage.getItem("gokul_watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("gokul_watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (id: string) => {
    setWatchlist((prev) => 
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const isInWatchlist = (id: string) => watchlist.includes(id);

  return { watchlist, toggleWatchlist, isInWatchlist };
}
