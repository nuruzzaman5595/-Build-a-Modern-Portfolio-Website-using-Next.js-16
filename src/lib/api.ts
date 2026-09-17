export async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Request failed with status ${response.status}: ${errorText}`);
  }

  return (await response.json()) as T;
}

export async function postJson<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
  return fetchJson<T>(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
  });
}
