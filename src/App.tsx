import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch, PoweredBy, SearchBox } from "react-instantsearch";
import type { Hit as AlgoliaHit } from "instantsearch.js";
import { format, formatDistanceToNow } from "date-fns";

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_KEY
);

type MyHit = AlgoliaHit<{
  name: string;
  body: string;
  closed_at: number;
  comments: number;
  created_at: number;
  labels: string[];
  number: number;
  objectID: string;
  reactions: number;
  repo: string;
  state: string;
  title: string;
  type: string;
  updated_at: number;
  url: string;
  user: string;
}>;

type MetadataProps = {
  label: string;
  value: string | number;
};

function Metadata({ label, value }: MetadataProps) {
  return (
    <span className="px-2 py-1 bg-gray-200 rounded shadow-sm text-sm flex items-center">
      <span className="font-light mr-1">{label}:</span>
      <span>{value}</span>
    </span>
  );
}

function Hit({ hit }: { hit: MyHit }) {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return `${formatDistanceToNow(date, {
      addSuffix: true,
    })} (${format(date, "yyyy-MM-dd HH:mm")})`;
  };

  return (
    <a
      href={hit.url}
      className="block border rounded p-2 m-1 shadow-md hover:bg-gray-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1 className="text-xl font-bold mb-2">{hit.title}</h1>
      <p className="text-gray-700 mb-2">{hit.body}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        <Metadata label="By" value={hit.user} />
        <Metadata label="Repo" value={hit.repo} />
        <Metadata label="State" value={hit.state} />
        <Metadata label="Comments" value={hit.comments} />
        <Metadata label="Reactions" value={hit.reactions} />
        <Metadata label="Labels" value={hit.labels.join(", ")} />
        <Metadata label="Created" value={formatDate(hit.created_at)} />
        <Metadata label="Last update" value={formatDate(hit.updated_at)} />
        <Metadata label="Issue number" value={hit.number} />
      </div>
    </a>
  );
}

export default function App() {
  return (
    <main>
      <InstantSearch
        searchClient={searchClient}
        indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
      >
        <div className="relative flex items-center justify-end">
          <div className="flex-1">
            <SearchBox />
          </div>
          <div className="absolute right-0 mr-16">
            <PoweredBy />
          </div>
        </div>
        <Hits<MyHit>
          hitComponent={Hit}
          classNames={
            {
              // item: "p-3 m-3 border rounded",
              // turn off border and rounded for the last item
              // using tailwind
              // list: "p-3 m-3",
            }
          }
        />
      </InstantSearch>
    </main>
  );
}
