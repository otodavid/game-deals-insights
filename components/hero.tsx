"use client";

import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Flame } from "lucide-react";
import { Button } from "./ui/button";
import { useHeroGameDeal } from "@/lib/queries/useHeroGameDeal";
import HeroSkeleton from "./hero-skeleton";
import { ITADGame } from "@/types/api-responses";
import { getGameImageSrc } from "@/lib/utils";

export default function HeroSection() {
  const { data, isLoading, isError } = useHeroGameDeal();

  if (isLoading) return <HeroSkeleton />;

  if (isError || !data || data.list.length === 0) {
    return (
      <div className="w-full aspect-video rounded-md bg-muted">
        <p>Something went wrong</p>
      </div>
    );
  }

  const gameDeal: ITADGame = data.list[0];

  return (
    <div className="w-full h-full relative rounded-md overflow-hidden isolate">
      <Image
        src={getGameImageSrc(gameDeal.assets)}
        alt="Deal of the day image"
        fill={true}
        className="object-cover -z-10"
      />
      <div className="bg-gradient-to-br md:bg-gradient-to-r from-primary/90 to-primary/40 w-full h-full min-h-80 p-4 relative">
        <div className="flex justify-end absolute top-5 right-5">
          <Badge className="mr-0 ml-auto bg-primary text-primary-foreground">
            <Flame />
            Deal of the day
          </Badge>
        </div>

        <div className="text-secondary px-4  flex flex-col gap-2 h-full w-full justify-center">
          <Badge className="bg-chart-2">{gameDeal.deal.cut} off</Badge>
          <h2 className="text-xl md:text-2xl xl:text-4xl 2xl:text-5xl font-semibold">
            {gameDeal.title}
          </h2>
          <div className="flex gap-2">
            <span className="line-through text-secondary/70">
              &#36;{gameDeal.deal.regular.amount}
            </span>
            <span className="font-medium">
              &#36;{gameDeal.deal.regular.amount}
            </span>
          </div>
          <Button variant={"secondary"} className="w-32">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
