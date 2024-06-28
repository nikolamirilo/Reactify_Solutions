import { APP_URL } from "@/constants";
import { FetchOptions } from "@/types";

export async function fetchData(path: string, options: FetchOptions) {
  try {
    const { method, cache, body } = options;
    const res = await fetch(`${APP_URL}${path}`, {
      method,
      cache: cache || "force-cache",
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return await res.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
