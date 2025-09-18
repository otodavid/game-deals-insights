import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";

export default function HeroSkeleton() {
  return (
    <Card className="overflow-hidden p-4">
      <Skeleton className="h-full w-full min-h-80" />
    </Card>
  );
}
