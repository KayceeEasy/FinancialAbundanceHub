import { client } from "@/lib/sanity/client";
import { POST_QUERY } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/dist/client/link";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return notFound();
  }

  return (
    
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 min-h-screen text-white">
      
      <Link 
      href="/blog" 
      className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mb-8 font-bold tracking-widest text-sm uppercase"
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span> 
      Back
    </Link>


      {/* Category Badge */}
      <div className="mb-6">
        <span className="bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
          {post.category || "Insight"}
        </span>
      </div>

      {/* Premium Title */}
      <h1 className="text-4xl md:text-4xl font-black leading-[1.1] tracking-normal mb-8">
        {post.title}
      </h1>

      {/* Meta Info */}
      {post.publishedAt && (
        <p className="text-slate-500 text-sm mb-10 border-b border-white/10 pb-8">
          Published on {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      )}

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img
            src={urlFor(post.featuredImage).width(1200).url()}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <div className="text-xl md:text-2xl text-slate-300 italic mb-12 border-l-4 border-amber-500 pl-6">
          {post.excerpt}
        </div>
      )}

      {/* Content Body */}
      <article className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-a:text-amber-500 prose-blockquote:border-amber-500">
        <PortableText value={post.body} />
      </article>
    </main>
  );
}