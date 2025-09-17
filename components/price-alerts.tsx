import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Bell, Pencil, Plus, Trash } from "lucide-react";
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
    <Card>
      <CardHeader className="flex justify-between">
        <CardTitle className="text-xl font-medium">Price Alerts</CardTitle>
        <Button variant="ghost">
          <Plus />
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] gap-4">
        {data.map((game) => (
          <div key={game.id} className="p-4 border rounded-md">
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
                  <CardTitle className="font-semibold flex justify-between">
                    <span>{game.title}</span>
                    <span>&#36;{game.currentPrice}</span>
                  </CardTitle>
                  <CardDescription className="sr-only">
                    Price alert for {game.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                      <Bell size={14} />
                      <span className="text-sm">&#36;{game.targetPrice}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2 ">
                    <Button
                      size={"sm"}
                      className="text-sm p-4 justify-self-start"
                    >
                      Active
                    </Button>

                    <div className="flex gap-2 justify-end">
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="text-sm p-4"
                      >
                        <Pencil />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="text-sm  p-4"
                      >
                        <Trash size={14} />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
