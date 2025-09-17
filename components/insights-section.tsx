"use client";

import { AverageDiscountChart } from "@/lib/average-discount-chart";
import StatsCardList from "./stats-card-list";
import { TotalDealsChart } from "./total-deals-chart";
import { useGetShops } from "@/lib/queries/useGetShops";

export default function InsightsSection() {
  const { data, isLoading } = useGetShops({ country: "CA" });

  return (
    <div>
      <h3 className="mb-4">Quick Insights</h3>

      <StatsCardList shops={data} isLoadingShops={isLoading} />

      <div className="@container">
        <div className="grid gap-4 @2xl:grid-cols-2">
          <TotalDealsChart shops={data} isLoadingShops={isLoading} />

          <AverageDiscountChart />
        </div>
      </div>
    </div>
  );
}
