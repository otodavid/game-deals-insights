import { Skeleton } from "./ui/skeleton";

export const TableSkeleton = ({ rows }: { rows: number }) => (
  <div className="grid grid-cols-1 gap-4">
    {[...Array(rows)].map((_, i) => (
      <Skeleton key={i} className="h-8 w-full" />
    ))}
  </div>
);
