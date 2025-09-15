import { Search } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import GameCard from "./game-card";

export default function GameDeals() {
  const gamesData = [
    {
      id: 1,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 2,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 3,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 4,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 5,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 6,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 7,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 8,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
    {
      id: 9,
      title: "GTA VI",
      regularPrice: 19.99,
      dealPrice: 12.99,
      discount: 20,
      store: "Humble",
    },
  ];
  return (
    <div>
      <h3>Games on Sale</h3>
      <Card>
        <CardHeader>
          <div className="relative">
            <label htmlFor="game-search" className="sr-only">
              Search for a game
            </label>
            <Input
              id="game-search"
              type="search"
              className="rounded-md pl-8"
              placeholder="Search for any game..."
            />
            <Search
              className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              size={"16px"}
              aria-hidden={true}
            />
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {gamesData.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              dealPrice={game.dealPrice}
              discount={game.discount}
              regularPrice={game.regularPrice}
              store={game.store}
              title={game.title}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
