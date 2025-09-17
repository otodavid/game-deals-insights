import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ITADGame } from "@/types/api-responses";
import GameCard from "./game-card";
import GameDetails from "./game-details";

export default function GameCardModal({ game }: { game: ITADGame }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <GameCard game={game} />
        </div>
      </DialogTrigger>
      <GameDetails game={game} />
    </Dialog>
  );
}
