import { Input } from "./ui/input";
import { Search } from "lucide-react";

export default function SearchBox({
  search,
  setSearch,
  setQuery,
}: {
  search: string;
  setSearch: (val: string) => void;
  setQuery: (val: string) => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setQuery(search);
  };

  return (
    <div className="relative w-3/4">
      <label htmlFor="game-search" className="sr-only">
        Search for a game
      </label>
      <Input
        id="game-search"
        type="search"
        placeholder="Search for any game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pl-8 rounded-md w-full"
      />
      <Search
        className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        size={16}
        aria-hidden
      />
    </div>
  );
}
