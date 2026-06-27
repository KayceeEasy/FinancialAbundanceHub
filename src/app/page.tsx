import HomeClient from "@/components/HomeClient";
import { client } from "@/lib/sanity/client";
import {
  POSTS_QUERY,
  FEATURED_POST_QUERY,
} from "@/lib/sanity/queries";

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