import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface GameProps {
  id: number;
  title: string;
  regularPrice: number;
  dealPrice: number;
  discount: number;
  store: string;
}

export default function GameCard(game: GameProps) {
  return (
    <Card className="p-0 rounded-md overflow-hidden">
      <div className="relative isolate aspect-square">
        <Image
          src={"/images/game1.jpg"}
          alt={`${game.title} cover art`}
          fill={true}
          className="object-cover -z-10"
        />

        <div className="text-white  z-10 absolute bottom-0 left-0 right-0 p-4 bg-primary/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold capitalize">
              {game.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between mt-2">
            <div className="space-x-2">
              <Badge className="bg-chart-2 px-2.5 py-1">{game.discount}%</Badge>
              <span>&#36;{game.dealPrice}</span>
            </div>
            <span>{game.store}</span>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
