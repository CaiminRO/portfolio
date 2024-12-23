import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-12-23",
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: { asset: { url: string } }) {
  return builder.image(source);
}
