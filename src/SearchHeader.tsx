import { SearchBox, PoweredBy } from "react-instantsearch";

export function SearchHeader() {
  return (
    <div className="relative flex items-center justify-end mb-4">
      <div className="flex-1">
        <SearchBox />
      </div>
      <div className="absolute right-0 mr-16">
        <PoweredBy />
      </div>
    </div>
  );
}
