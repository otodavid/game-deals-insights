import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Pencil, Plus } from "lucide-react";
import Image from "next/image";

export default function PriceAlert() {
  const data = [
    {
      id: 1,
      title: "Baki",
      currentPrice: 99.99,
      targetPrice: 69.99,
      store: "steam",
      gameImage: "/images/game1.jpg",
    },
    {
      id: 2,
      title: "NBA 2k25",
      currentPrice: 25.99,
      targetPrice: 15.99,
      store: "Epic",
      gameImage: "/images/game2.jpg",
    },
    {
      id: 3,
      title: "Cyberpunk",
      currentPrice: 69.99,
      targetPrice: 39.99,
      store: "GOG",
      gameImage: "/images/game3.jpg",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-xl font-medium">Price Alerts</h3>
        <Button variant="ghost">
          <Plus />
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {data.map((game) => (
          <Card key={game.id} className="p-4">
            <div className="grid grid-cols-[6rem_1fr]">
              <div className="relative">
                <Image
                  src={game.gameImage}
                  alt="Game thumbnail"
                  fill={true}
                  className="object-cover rounded-md"
                />
              </div>

              <div className="ml-4">
                <CardHeader className="px-0">
                  <CardTitle className="text-lg font-semibold">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="sr-only">
                    Price alert for {game.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm">Target Price</span>
                      <span className="font-semibold">
                        &#36;{game.targetPrice}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">Current Lowest</span>
                      <span className="font-semibold">&#36;12.99</span>
                    </div>
                  </div>
                  <Button variant={"secondary"} className="mt-2 w-full">
                    <Pencil size={"1rem"} /> Manage
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
