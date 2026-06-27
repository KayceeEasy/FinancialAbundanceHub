import { client } from "@/lib/sanity/client";
import { POST_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, {
    slug,
  });

  if (!post) {
    return notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1>{post.title}</h1>

      {post.publishedAt && (
        <p style={{ opacity: 0.6 }}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}

      {post.featuredImage && (
        <img
          src={urlFor(post.featuredImage).width(900).url()}
          alt={post.title}
          style={{ width: "100%", borderRadius: "10px", margin: "1rem 0" }}
        />
      )}

      {post.excerpt && (
        <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
          {post.excerpt}
        </p>
      )}

      <article className="prose prose-lg max-w-none mt-8">
        <PortableText value={post.body} />
      </article>
    </main>
  );
}