import Image from "next/image";
import { ITADGame, ITADGameDealDetail } from "@/types/api-responses";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useGameDealDetail } from "@/lib/queries/useGameDealDetail";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function GameDetails({ game }: { game: ITADGame }) {
  const { data } = useGameDealDetail({ gameId: game.id });
  const [chartData, setChartData] = useState<
    { timePeriod: string; price: number | null }[]
  >([]);
  const [fetchedData, setFetchedData] = useState<ITADGameDealDetail | null>(
    null
  );

  const chartConfig = {
    price: { label: "Price", color: "var(--chart-1)" },
  } satisfies ChartConfig;

  useEffect(() => {
    if (data?.[0]) {
      const { historyLow, id, deals } = data[0];
      const currentPrice = game.deal.price.amount;
      const regularPrice = game.deal.regular.amount;

      setChartData(() => [
        { timePeriod: "Regular", price: regularPrice },
        { timePeriod: "Current", price: currentPrice },
        { timePeriod: "3 Months", price: historyLow.m3?.amount ?? null },
        { timePeriod: "1 Year", price: historyLow.y1?.amount ?? null },
        { timePeriod: "All Time Low", price: historyLow.all?.amount ?? null },
      ]);

      setFetchedData(() => ({
        id,
        historyLow,
        deals: deals.filter((deal) => deal.shop.id === game.deal.shop.id),
      }));
    }
  }, [data, game]);

  const getExpiryDate = (date: string | null) => {
    if (date) {
      return new Date(date).toLocaleDateString();
    } else {
      return "No known expiry date";
    }
  };

  const deal = fetchedData?.deals?.[0];
  const imageSrc =
    game.assets.boxart ||
    game.assets.banner600 ||
    game.assets.banner400 ||
    "/images/noImage.png";

  return (
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle className="sr-only">More Details</DialogTitle>
        <DialogDescription className="sr-only">
          Game deal details for {game.title}
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex gap-4">
          <div className="relative w-28 sm:w-36 rounded-md">
            <Image
              src={imageSrc}
              alt={`${game.title} cover art`}
              fill
              className="rounded-md object-cover object-top w-full square"
            />
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <p className="text-lg md:text-xl font-bold">{game.title}</p>
            <div className="flex items-center gap-2 text-sm">
              <Badge className="bg-chart-2">-{game.deal.cut}%</Badge>
              <span className="text-sm md:text-base">
                on {game.deal.shop.name}
              </span>
            </div>
            <div className="md:text-lg font-semibold">
              &#36;{game.deal.price.amount}
            </div>
            <div className="text-sm text-muted-foreground">
              Expires: {getExpiryDate(deal?.expiry as string)}
            </div>
            {deal?.url && (
              <a
                href={deal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="mt-2 cursor-pointer bg-accent text-accent-foreground">
                  Visit Deal
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold mt-4">Price History</p>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 30, right: 30 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timePeriod"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Line
              dataKey="price"
              type="linear"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-1)" }}
              activeDot={{ r: 6 }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `$${value}`}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </div>
    </DialogContent>
  );
}
