import { liteClient as algoliasearch } from "algoliasearch/lite";
import {
  ClearRefinements,
  CurrentRefinements,
  InstantSearch,
} from "react-instantsearch";
import { Refinements } from "./Refinements";
import { SearchResults } from "./SearchResults";
import { SearchHeader } from "./SearchHeader";

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_KEY,
);

export default function App() {
  return (
    <main className="m-2">
      <InstantSearch
        searchClient={searchClient}
        indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
        insights
      >
        <SearchHeader />
        <div className="flex gap-3 ml-2 mb-2">
          <ClearRefinements />
          <CurrentRefinements />
        </div>
        <div className="flex gap-3 ml-2">
          <Refinements />
          <SearchResults />
        </div>
      </InstantSearch>
    </main>
  );
}
