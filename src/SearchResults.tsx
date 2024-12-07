import { Hits, InfiniteHits } from "react-instantsearch";
import { MyHit, Hit } from "./Hits";

export function SearchResults() {
  return (
    <div className="flex-1">
      <InfiniteHits<MyHit> hitComponent={Hit} showPrevious={false} />
    </div>
  );
}
