import { SearchBox, PoweredBy } from "react-instantsearch";
import { useCallback, useRef, useState } from "react";

export function SearchHeader() {
  const timeoutRef = useRef<number>();
  const [debounceMs, setDebounceMs] = useState(500);

  const queryHook = useCallback(
    (query: string, search: (value: string) => void) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => search(query), debounceMs);
    },
    [debounceMs],
  );

  return (
    <div className="relative flex items-center gap-4 mb-4">
      <div className="flex-1">
        <SearchBox queryHook={queryHook} />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm">
          Debounce (ms):
          <input
            type="number"
            min="0"
            max="2000"
            value={debounceMs}
            onChange={(e) => setDebounceMs(Number(e.target.value))}
            className="w-20 ml-2 px-2 py-1 border rounded"
          />
        </label>
        <PoweredBy />
      </div>
    </div>
  );
}
