import { liteClient as algoliasearch } from "algoliasearch/lite";
import {
  Hits,
  InstantSearch,
  PoweredBy,
  SearchBox,
  RefinementList,
} from "react-instantsearch";
import { MyHit, Hit } from "./Hits";

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_KEY
);

export default function App() {
  return (
    <main>
      <InstantSearch
        searchClient={searchClient}
        indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
        insights
      >
        <div className="relative flex items-center justify-end">
          <div className="flex-1">
            <SearchBox />
          </div>
          <div className="absolute right-0 mr-16">
            <PoweredBy />
          </div>
        </div>
        <RefinementList attribute="repo" />
        <Hits<MyHit> hitComponent={Hit} />
      </InstantSearch>
    </main>
  );
}
