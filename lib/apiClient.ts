const BASE_URL = "https://api.isthereanydeal.com";

export async function apiFetch<T>(
  endpoint: string,
  params: Record<string, unknown> = {}
): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  url.searchParams.set("key", process.env.NEXT_PUBLIC_ITAD_API_KEY!);
  Object.entries(params).forEach(([k, v]) =>
    url.searchParams.set(k, String(v))
  );

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
}
