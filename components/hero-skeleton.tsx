import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function HeroSkeleton() {
  return (
    <Card className="overflow-hidden p-4">
      <Skeleton className="h-full w-full" />
    </Card>
  );
}
