import { client } from "@/lib/sanity/client";
import {
  POSTS_QUERY,
  FEATURED_POST_QUERY,
} from "@/lib/sanity/queries";

import FeaturedPost from "@/components/blog/FeaturedPost";
import ArticleRow from "@/components/blog/ArticleRow";

export default async function BlogPage() {

  const featured = await client.fetch(FEATURED_POST_QUERY);

  const posts = await client.fetch(POSTS_QUERY);

  const latest = posts.filter(
    (p: any) => p._id !== featured?._id
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <header className="mb-20 mt-6">
        <h1 className="text-5xl font-black">
          Insights
        </h1>

        <p className="mt-4 text-xl text-slate-400 max-w-2xl">
          Ideas on wealth, investing, real estate and building financial freedom.
        </p>
      </header>

      <FeaturedPost post={featured} />

      <section>

        <h2 className="text-3xl font-bold mb-5">
          Latest Posts
        </h2>

        {latest.map((post: any) => (
          <ArticleRow
            key={post._id}
            post={post}
          />
        ))}

      </section>

    </main>
  );
}