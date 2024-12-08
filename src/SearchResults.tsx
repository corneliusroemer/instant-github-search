import { InfiniteHits, Stats } from "react-instantsearch";
import { MyHit, Hit } from "./Hits";

export function SearchResults() {
  return (
    <div className="flex-1">
      <Stats className="text-xs pl-1 pt-2" />
      <InfiniteHits<MyHit> hitComponent={Hit} showPrevious={false} />
    </div>
  );
}
