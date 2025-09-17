"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGameDeals } from "./queries/useGameDeals";
import { DEFAULT_DEALS_PARAMS } from "./constants";
import { useMemo } from "react";

export function AverageDiscountChart() {
  const steamDeals = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 50,
    sort: "-hot",
    shops: "61",
  });

  const epicDeals = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 50,
    sort: "-hot",
    shops: "16",
  });

  const gogDeals = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 50,
    sort: "-hot",
    shops: "35",
  });

  const humbleDeals = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 50,
    sort: "-hot",
    shops: "37",
  });

  const ubisoftDeals = useGameDeals({
    ...DEFAULT_DEALS_PARAMS,
    limit: 50,
    sort: "-hot",
    shops: "62",
  });

  // Build chart data
  const chartData = useMemo(() => {
    const sources = [
      { name: "Steam", query: steamDeals },
      { name: "Epic Games", query: epicDeals },
      { name: "GOG", query: gogDeals },
      { name: "Humble", query: humbleDeals },
      { name: "Ubisoft", query: ubisoftDeals },
    ];

    return sources.map(({ name, query }) => {
      const games = query.data?.list ?? [];
      const avg =
        games.length > 0
          ? games.reduce((sum, g) => sum + g.deal.cut, 0) / games.length
          : 0;

      return {
        store: name,
        avgDiscount: parseFloat(avg.toFixed(2)),
      };
    });
  }, [steamDeals, epicDeals, gogDeals, humbleDeals, ubisoftDeals]);

  const chartConfig: ChartConfig = {
    avgDiscount: {
      label: "Avg",
      color: "var(--chart-2)",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Discount by Store</CardTitle>
        <CardDescription>Based on top 50 top rated games</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="store"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="avgDiscount" fill="var(--chart-2)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Based on average discount across major stores
        </div>
      </CardFooter>
    </Card>
  );
}
