import { Hits } from "react-instantsearch";
import { MyHit, Hit } from "./Hits";

export function SearchResults() {
  return (
    <div className="flex-1">
      <Hits<MyHit> hitComponent={Hit} />
    </div>
  );
}
