import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../apiClient";
import {  ITADShopDetail } from "@/types/api-responses";

export function useGetShops(params: { country?: string }) {
  return useQuery({
    queryKey: ["deals", params],
    queryFn: () => apiFetch<ITADShopDetail[]>("service/shops/v1", { params }),
  });
}
