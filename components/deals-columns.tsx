"use client";

import { ITADGame } from "@/types/api-responses";
import { ColumnDef } from "@tanstack/react-table";

export const dealsColumns: ColumnDef<ITADGame>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const data = row.original.title;
      return (
        <span className="text-xs text-center">
          {data !== null ? data : "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "regularPrice",
    header: "Regular Price",
    cell: ({ row }) => {
      const data = row.original.deal.regular.amount;
      return (
        <span className="text-xs text-center">{data !== null ? data : 0}</span>
      );
    },
  },
  {
    accessorKey: "discount",
    header: "Discount",
    cell: ({ row }) => {
      const data = row.original.deal.cut;
      return <span className="text-xs">{data !== null ? -data : 0}</span>;
    },
  },
  {
    accessorKey: "dealPrice",
    header: "Current Price",
    cell: ({ row }) => {
      const data = row.original.deal.price.amount;
      return (
        <span className="text-xs text-center">
          {data !== null ? data : 0}
        </span>
      );
    },
  },
  {
    accessorKey: "store",
    header: "Store",
    cell: ({ row }) => {
      const data = row.original.deal.shop.name;
      return (
        <span className="text-xs text-center">
          {data !== null ? data : "-"}
        </span>
      );
    },
  },
];
