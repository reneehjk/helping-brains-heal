import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "lbg4ckv5",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default client;