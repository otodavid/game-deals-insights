import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../apiClient";
import { ITADDealsResponse } from "@/types/api-responses";

export function useGameDeals(params: {
  limit?: number;
  sort?: string;
  filter?: string;
  country?: string;
  shops?: string;
  offset?: number;
}) {
  return useQuery({
    queryKey: ["deals", params],
    queryFn: () => apiFetch<ITADDealsResponse>("deals/v2", params),
  });
}
