import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../../lib/apiClient";
import { ITADDealsResponse } from "@/types/api-responses";
import { DEFAULT_DEALS_PARAMS } from "../../lib/constants";

export function useHeroGameDeal() {
  return useQuery({
    queryKey: ["deals"],
    queryFn: () =>
      apiFetch<ITADDealsResponse>("deals/v2", {
        params: { ...DEFAULT_DEALS_PARAMS, sort: "-cut" },
      }),
  });
}
