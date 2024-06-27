export type FetchOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  cache?: "force-cache" | "no-cache" | "no-store";
  body?: BodyInit;
};
