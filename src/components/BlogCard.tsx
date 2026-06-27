import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";

export default function BlogCard({ post }: { post: any }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-amber-500/50 hover:bg-white/10"
    >
      {post.featuredImage && (
        <img
          src={urlFor(post.featuredImage).width(800).url()}
          alt={post.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      )}

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400">
            {post.category}
          </span>

          <span className="text-xs text-slate-400">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <h2 className="mb-3 text-2xl font-bold transition group-hover:text-amber-400">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="line-clamp-3 text-slate-400">
            {post.excerpt}
          </p>
        )}

        <div className="mt-6 font-semibold text-amber-500">
          Read Article →
        </div>
      </div>
    </Link>
  );
}