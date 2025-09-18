import { NextRequest, NextResponse } from "next/server";
import { ITADDealDetail } from "@/types/api-responses";
import { apiFetch } from "@/lib/apiClient";
import { DEFAULT_SHOPS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const body = await req.json();
    const { gameIds } = body;
    const country = searchParams.get("country") ?? "CA";
    const deals = searchParams.get("deals") === "false";
    const shopsParam = searchParams.get("shops");

    const defaultShops = Object.keys(DEFAULT_SHOPS).map(Number);
    const shops = shopsParam
      ? shopsParam.split(",").map((s) => parseInt(s, 10))
      : defaultShops;

    if (!Array.isArray(gameIds) || gameIds.length === 0) {
      return NextResponse.json(
        { error: "gameIds must be a non-empty array" },
        { status: 400 }
      );
    }

    const data = await apiFetch<ITADDealDetail[]>("games/prices/v3", {
      method: "POST",
      params: {
        country,
        deals,
        shops,
      },
      bodyData: gameIds,
    });

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch game deal" },
      { status: 500 }
    );
  }
}
