import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function GameCardSkeleton() {
  return (
    <Card className="overflow-hidden p-0 pb-6">
      <Skeleton className="h-60 w-full" />
      <CardHeader>
        <Skeleton className="h-6 w-48" />
      </CardHeader>
      <CardContent className="space-y-2 font-normal">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-32" />
        </div>
      </CardContent>
    </Card>
  );
}
