"use client";

import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import type { ITADDealsResponse, ITADGame } from "@/types/api-responses";

interface GameTableProps {
  games: ITADDealsResponse;
}

export default function GamesTableView({ games }: GameTableProps) {
  const columnHelper = createColumnHelper<ITADGame>();
  const columns: ColumnDef<ITADGame, any>[] = [
    columnHelper.accessor("title", {
      id: "title",
      header: "Title",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row.deal?.cut ?? 0, {
      id: "discount",
      header: "Discount (%)",
      cell: (info) => `${info.getValue()}%`,
    }),
    columnHelper.accessor((row) => row.deal?.price?.amount ?? 0, {
      id: "dealPrice",
      header: "Deal Price",
      cell: (info) => `$${info.getValue().toFixed(2)}`,
    }),
    columnHelper.accessor((row) => row.deal?.shop?.name ?? "Unknown", {
      id: "store",
      header: "Store",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: games.list,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-border text-left">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border p-2 cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-muted/50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
