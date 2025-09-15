import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Flame } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="w-full aspect-video relative rounded-md overflow-hidden isolate">
      <Image
        src={"/images/hero.webp"}
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
          <Badge className="bg-chart-2">-20% off</Badge>
          <h2 className="text-4xl font-semibold">Borderlands 4</h2>
          <div className="flex gap-2">
            <span className="line-through text-secondary/70">&#36;79.99</span>
            <span className="font-medium">&#36;99.99</span>
          </div>
          <Button variant={"secondary"} className="w-32">
            View
          </Button>
        </div>
      </div>
    </div>
  );
}
