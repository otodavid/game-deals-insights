"use client";

import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Flame } from "lucide-react";
import { Button } from "./ui/button";
import { useHeroGameDeal } from "@/lib/queries/useHeroGameDeal";
import HeroSkeleton from "./hero-skeleton";
import { ITADGame } from "@/types/api-responses";

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
    <div className="w-full aspect-video relative rounded-md overflow-hidden isolate">
      <Image
        src={gameDeal.assets.boxart}
        alt="Deal of the day image"
        fill={true}
        className="object-cover aspect-video -z-10"
      />
      <div className="bg-gradient-to-br from-primary/90 to-primary/40 w-full h-full backdrop-blur-[2px] p-4">
        <div className="flex justify-end">
          <Badge className="mr-0 ml-auto bg-accent text-accent-foreground">
            <Flame />
            Deal of the day
          </Badge>
        </div>

        <div className="text-secondary py-8 flex flex-col gap-2">
          <Badge className="bg-chart-2">{gameDeal.deal.cut} off</Badge>
          <h2 className="text-4xl font-semibold">{gameDeal.title}</h2>
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
