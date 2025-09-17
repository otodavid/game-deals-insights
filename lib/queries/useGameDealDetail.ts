import {  ITADGameDealDetail } from "@/types/api-responses";
import { useQuery } from "@tanstack/react-query";

export function useGameDealDetail({ gameId }: { gameId: string }) {
  return useQuery({
    queryKey: ["game-deal-detail", gameId],
    queryFn: async (): Promise<ITADGameDealDetail[]> => {
      const res = await fetch("/api/game-deal-detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameIds: [gameId] }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch game deal");
      }

      return res.json();
    },
  });
}
