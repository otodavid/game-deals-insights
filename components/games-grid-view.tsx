import GameCard from "./game-card";
import type { ITADDealsResponse } from "@/types/api-responses";

export default function GamesGridView({ games }: { games: ITADDealsResponse }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {games?.list.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          assets={game.assets}
          deal={game.deal}
          type={game.type}
        />
      ))}
    </div>
  );
}
