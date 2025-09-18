import type { ITADGame } from "@/types/api-responses";
import GameCardModal from "./game-card-modal";

export default function GamesGridView({ games }: { games: ITADGame[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {games &&
        games.map((game) => <GameCardModal key={game.id} game={game} />)}
    </div>
  );
}
