import { Button } from "./ui/button";

interface PaginationProps {
  pageIndex: number;
  setPageIndex: (index: number) => void;
  hasMore: boolean;
}

export default function Pagination({
  hasMore,
  pageIndex,
  setPageIndex,
}: PaginationProps) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <Button
        onClick={() => setPageIndex(pageIndex - 1)}
        disabled={pageIndex === 0}
        variant={"ghost"}
      >
        Prev
      </Button>
      <Button
        onClick={() => setPageIndex(pageIndex + 1)}
        disabled={!hasMore}
        variant={"ghost"}
      >
        Next
      </Button>
    </div>
  );
}
