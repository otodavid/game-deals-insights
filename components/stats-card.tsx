import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CircleArrowOutUpRight } from "lucide-react";

interface StatsCardProps {
  id: number;
  title: string;
  value: string | number | undefined;
  url: string;
  description?: string;
}

export default function StatsCard(stats: StatsCardProps) {
  return (
    <Card className="px-4">
      <div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0">
          <CardTitle className="text-sm font-medium capitalize">
            {stats.title}
          </CardTitle>
          <CircleArrowOutUpRight size={"1rem"} />
        </CardHeader>
        <CardContent className="px-0">
          <p className="text-4xl font-bold">{stats.value}</p>
          <p className="text-xs text-muted-foreground capitalize mt-2">
            {stats.description}
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
