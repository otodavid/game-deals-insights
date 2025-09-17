const BASE_URL = "https://api.isthereanydeal.com";

interface ApiFetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, unknown>;
  bodyData?: Record<string, unknown> | Record<string, unknown>[] | string[];
}

export async function apiFetch<T>(
  endpoint: string,
  { method = "GET", params = {}, bodyData }: ApiFetchOptions = {}
): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  // always attach API key
  url.searchParams.set("key", process.env.NEXT_PUBLIC_ITAD_API_KEY!);

  const fetchOptions: RequestInit = { method };

  if (method === "GET") {
    Object.entries(params).forEach(([k, v]) =>
      url.searchParams.set(k, String(v))
    );
  } else {
    fetchOptions.headers = { "Content-Type": "application/json" };
    fetchOptions.body = JSON.stringify(bodyData);
  }

  const res = await fetch(url.toString(), fetchOptions);

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
