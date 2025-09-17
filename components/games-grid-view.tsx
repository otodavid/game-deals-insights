import type { ITADDealsResponse } from "@/types/api-responses";
import GameCardModal from "./game-card-modal";

export default function GamesGridView({ games }: { games: ITADDealsResponse }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {games &&
        games.list.map((game) => <GameCardModal key={game.id} game={game} />)}
    </div>
  );
}
