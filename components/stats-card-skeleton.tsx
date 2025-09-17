import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function StatsCardSkeleton() {
  return (
    <Card className="px-4">
      <div>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-0">
          <CardTitle className="text-sm font-medium capitalize">
            <Skeleton className="h-4 w-36" />
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-3 w-40 mt-2" />
        </CardContent>
      </div>
    </Card>
  );
}
