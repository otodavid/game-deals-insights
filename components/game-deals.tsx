"use client";

import { useState, useMemo } from "react";
import HeroSkeleton from "./hero-skeleton";
import type { ITADDealsResponse } from "@/types/api-responses";
import { useGameDeals } from "@/lib/queries/useGameDeals";
import { useGameSearch } from "@/lib/queries/useGameSearch";
import { DEFAULT_DEALS_PARAMS } from "@/lib/constants";
import GamesGridView from "./games-grid-view";
import GamesTableView from "./games-table-view";
import { Button } from "./ui/button";
import ViewToggle from "./view-toggle";
import SearchBox from "./search-box";

export default function GameDeals() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 10;

  // Fetch default top deals
  const {
    data: dealsData,
    isLoading: isDealsLoading,
    isError: isDealsError,
  } = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 10,
    offset: pageIndex * pageSize,
  });

  // Fetch search results
  const {
    data: searchResults,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useGameSearch({ title: query, results: 20 });

  // Determine which data to use
  const isSearching = query.length > 0;
  const games: ITADDealsResponse | undefined = useMemo(() => {
    if (isSearching) {
      if (!searchResults) return undefined;
      return {
        list: searchResults,
        hasMore: false,
        nextOffset: 0,
      };
    } else {
      return dealsData;
    }
  }, [dealsData, isSearching, searchResults]);

  const isLoading = isSearching ? isSearchLoading : isDealsLoading;
  const isError = isSearching ? isSearchError : isDealsError;

  return (
    <div>
      {/* Search + View Toggle */}
      <div className="flex justify-between items-center mb-4 gap-4">
        <SearchBox search={search} setQuery={setQuery} setSearch={setSearch} />

        <ViewToggle setView={setView} view={view} />
      </div>

      {isLoading && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {[...Array(pageSize)].map((_, i) => (
            <HeroSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Error */}
      {isError && <div className="text-red-500">Failed to load games.</div>}

      {/* Empty */}
      {!isLoading && games?.list.length === 0 && <div>No games found.</div>}

      {/* Content */}
      {!isLoading && games?.list && games.list.length > 0 && (
        <>
          {view === "grid" ? (
            <GamesGridView games={games} />
          ) : (
            <GamesTableView games={games} />
          )}
        </>
      )}

      <div className="flex justify-center gap-2 mt-4">
        <Button
          onClick={() => setPageIndex(pageIndex - 1)}
          disabled={pageIndex === 0}
          variant={"default"}
        >
          Prev
        </Button>
        <Button
          onClick={() => setPageIndex(pageIndex + 1)}
          disabled={!games?.hasMore}
          variant={"default"}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
