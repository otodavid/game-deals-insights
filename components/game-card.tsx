import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { ITADGame } from "@/types/api-responses";

export default function GameCard(game: ITADGame) {
  return (
    <Card className="p-0 rounded-md overflow-hidden">
      <div className="relative isolate aspect-square">
        <Image
          src={
            game.assets.boxart ?? game.assets.banner600 ?? game.assets.banner400
          }
          alt={`${game.title} cover art`}
          fill={true}
          className="object-cover -z-10"
        />

        <div className="text-white  z-10 absolute bottom-0 left-0 right-0 p-4 bg-primary/60 backdrop-blur-sm">
          <CardHeader className="px-0">
            <CardTitle className="text-2xl font-semibold capitalize">
              {game.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between mt-2 px-0">
            <div className="space-x-2">
              <Badge className="bg-chart-2 px-2.5 py-1">{game.deal.cut}%</Badge>
              <span>&#36;{game.deal.price.amount}</span>
            </div>
            <span>{game.deal.shop.name}</span>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
