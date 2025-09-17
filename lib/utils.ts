import { ITADAssets } from "@/types/api-responses";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getGameImageSrc(assets?: Partial<ITADAssets>): string {
  const fallback = "/images/no-image.png";

  if (!assets || typeof assets !== "object") return fallback;

  const options = [assets.boxart, assets.banner600, assets.banner400];

  for (const src of options) {
    if (src && src.trim() !== "") return src;
  }

  return fallback;
}
