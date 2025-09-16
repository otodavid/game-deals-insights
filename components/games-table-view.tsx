"use client";

import type { ITADDealsResponse } from "@/types/api-responses";
import { DealsDataTable } from "./deals-data-table";
import { dealsColumns } from "./deals-columns";

interface GameTableProps {
  games: ITADDealsResponse;
}

export default function GamesTableView({ games }: GameTableProps) {
  return <DealsDataTable data={games.list} columns={dealsColumns} />;
}
