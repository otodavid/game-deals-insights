import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../apiClient";
import { ITADDealsResponse, ITADGame } from "@/types/api-responses";

export function useGameSearch(params: { title: string; results?: number }) {
  return useQuery({
    queryKey: ["gameSearch", params.title],
    queryFn: () => apiFetch<ITADGame[]>("games/search/v1", params),
  });
}
