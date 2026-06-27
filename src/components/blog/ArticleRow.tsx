import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import CategoryBadge from "./CategoryBadge";
import ReadingTime from "./ReadingTime";

export default function ArticleRow({ post }: any) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group flex gap-8 border-b border-white/10 py-8"
    >
      {post.featuredImage && (
        <img
          src={urlFor(post.featuredImage).width(500).url()}
          alt={post.title}
          className="w-56 h-36 rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      )}

      <div className="flex flex-col justify-center flex-1">

        <CategoryBadge category={post.category} />

        <h2 className="mt-4 text-2xl font-bold group-hover:text-amber-400 transition">
          {post.title}
        </h2>

        <p className="mt-3 text-slate-400 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-4">
          <ReadingTime
            excerpt={post.excerpt}
            date={post.publishedAt}
          />
        </div>

      </div>
    </Link>
  );
}