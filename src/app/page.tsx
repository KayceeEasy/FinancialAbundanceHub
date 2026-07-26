import HomeClient from "@/components/HomeClient";
import { client } from "@/lib/sanity/client";
import {
  POSTS_QUERY,
  FEATURED_POST_QUERY,
} from "@/lib/sanity/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Financial Abundance Hub",
  description: "Master real estate investment, wealth acceleration strategies, and financial intelligence with Financial Abundance Hub.",
};

export default async function Page() {
  const featured = await client.fetch(FEATURED_POST_QUERY);
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <HomeClient
      featured={featured}
      posts={posts || []}
    />
  );
}