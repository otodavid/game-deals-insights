"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ITADShopDetail } from "@/types/api-responses";
import { DEFAULT_SHOPS } from "@/lib/constants";
import { Skeleton } from "./ui/skeleton";

export function TotalDealsChart({
  shops,
  isLoadingShops,
}: {
  shops: ITADShopDetail[] | undefined;
  isLoadingShops: boolean;
}) {
  const chartData = React.useMemo(() => {
    if (!shops) return [];

    return shops
      .filter((shop) => DEFAULT_SHOPS[shop.id])
      .map((shop, index) => ({
        store: DEFAULT_SHOPS[shop.id].name,
        deals: shop.deals,
        fill: `var(--chart-${index + 1})`,
      }));
  }, [shops]);

  const chartConfig: ChartConfig = React.useMemo(() => {
    const config: ChartConfig = {
      deals: { label: "Deals" },
    };

    chartData.forEach((entry, index) => {
      config[entry.store] = {
        label: entry.store,
        color: `var(--chart-${index + 1})`,
      };
    });

    return config;
  }, [chartData]);

  const totalDeals = chartData.reduce((sum, entry) => sum + entry.deals, 0);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Game Store Deals</CardTitle>
        <CardDescription>Active deals by store</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        {isLoadingShops ? (
          <div>
            <div className="flex justify-center items-center">
              <Skeleton className="rounded-full w-40 h-40" />
            </div>

            {/* Legend Placeholder */}
            <div className="flex flex-wrap gap-2 *:basis-1/4 *:justify-center mt-6 max-w-72 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-24" />
              ))}
            </div>
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[270px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="deals"
                nameKey="store"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {totalDeals.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Total Deals
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
              <ChartLegend
                content={<ChartLegendContent nameKey="store" />}
                className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
              />
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing active deals across major stores
        </div>
      </CardFooter>
    </Card>
  );
}
