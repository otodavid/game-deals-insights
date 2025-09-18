import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../apiClient";
import { ITADGame, ITADGameDealDetail } from "@/types/api-responses";

export function useGameSearch(params: { title: string; results?: number }) {
  const searchedGamesQuery = useQuery({
    queryKey: ["gameSearch", params.title],
    queryFn: () => apiFetch<ITADGame[]>("games/search/v1", { params }),
  });

  const gameIds = searchedGamesQuery.data?.map((game) => game.id) ?? [];

  const dealDetailsQuery = useQuery({
    queryKey: ["game-deal-detail", gameIds],
    queryFn: async (): Promise<ITADGameDealDetail[]> => {
      const res = await fetch("/api/game-deal-detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameIds }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch game deal");
      }

      return res.json();
    },
    enabled: gameIds.length > 0,
  });

  console.log(dealDetailsQuery.data);

  const combinedData = searchedGamesQuery.data?.map((game) => {
    const dealDetail = dealDetailsQuery.data?.find(
      (detail) => detail.id === game.id
    );

    const bestDeal = dealDetail?.deals
      ?.slice()
      .sort((a, b) => a.price.amount - b.price.amount)[0];
    if (bestDeal) {
      return {
        id: game.id,
        title: game.title,
        assets: game.assets,
        type: game.type,
        deal: {
          cut: bestDeal?.cut,
          price: bestDeal?.price,
          regular: bestDeal?.regular,
          shop: bestDeal?.shop,
          url: bestDeal?.url,
        },
      };
    }
  }) as ITADGame[];

  return {
    data: combinedData,
    isLoading: dealDetailsQuery.isLoading,
    isError: dealDetailsQuery.isError,
  };
}
