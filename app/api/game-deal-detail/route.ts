import { NextRequest, NextResponse } from "next/server";
import { ITADDealDetail } from "@/types/api-responses";
import { apiFetch } from "@/lib/apiClient";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { gameIds } = body;

    if (!Array.isArray(gameIds) || gameIds.length === 0) {
      return NextResponse.json(
        { error: "gameIds must be a non-empty array" },
        { status: 400 }
      );
    }

    const data = await apiFetch<ITADDealDetail[]>("games/prices/v3", {
      method: "POST",
      params: {
        country: "CA",
        deals: false,
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
