"use client";

import StatsCardSkeleton from "./stats-card-skeleton";
import { DEFAULT_DEALS_PARAMS, DEFAULT_SHOPS } from "@/lib/constants";
import StatsCard from "./stats-card";
import { useGameDeals } from "@/hooks/queries/useGameDeals";
import { ITADGame, ITADShopDetail } from "@/types/api-responses";

export default function StatsCardList({
  shops,
  isLoadingShops,
}: {
  shops: ITADShopDetail[] | undefined;
  isLoadingShops: boolean;
}) {
  const { data: hotGameList } = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 60,
    sort: "-hot",
  });
  const { data: lowestDealData } = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 60,
    sort: "-cut",
  });

  if (isLoadingShops) {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatsCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  const filteredShops =
    shops && shops?.filter((store) => DEFAULT_SHOPS[Number(store.id)]);

  const totalActiveDeals = filteredShops?.reduce(
    (prev, store) => prev + store.deals,
    0
  );

  function getAverageDiscount(games: ITADGame[] | undefined) {
    if (!games || !games.length) return 0;
    const totalCut = games.reduce((sum, game) => sum + game.deal.cut, 0);
    return `${(totalCut / games.length).toFixed(2)}%`;
  }

  function getAverageSavings(games: ITADGame[] | undefined) {
    if (!games || !games.length) return 0;

    const totalPrice = games.reduce(
      (sum, game) => sum + (game.deal.regular.amount - game.deal.price.amount),
      0
    );
    return `$${(totalPrice / games.length).toFixed(2)}`;
  }
  const lowestGame = lowestDealData?.list?.[0];
  const lowestPrice = lowestGame ? `$${lowestGame.deal.price.amount}` : "N/A";
  const lowestDescription = lowestGame
    ? `${lowestGame.title} on ${lowestGame.deal.shop.name}`
    : "No deal found";

  const statsData = [
    {
      id: 1,
      title: "total Active Deals",
      value: totalActiveDeals?.toLocaleString() ?? "N/A",
      description: "curated from 5 major stores",
      url: "#",
    },
    {
      id: 2,
      title: "average discount",
      value: getAverageDiscount(hotGameList?.list),
      description: "Taken from 60 most popular games",
      url: "#",
    },
    {
      id: 3,
      title: "Lowest deal price",
      value: lowestPrice,
      description: lowestDescription,
      url: "#",
    },
    {
      id: 4,
      title: "average savings",
      value: getAverageSavings(hotGameList?.list),
      description: "Taken from 60 most popular games",
      url: "#",
    },
  ];

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-8">
      {statsData?.map((stats) => (
        <div key={stats.id}>
          <StatsCard
            id={stats.id}
            title={stats.title}
            url={stats.url}
            value={stats.value}
            description={stats.description}
          />
        </div>
      ))}
    </div>
  );
}
