import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import CategoryBadge from "./CategoryBadge";
import ReadingTime from "./ReadingTime";

export default function FeaturedPost({ post }: any) {

  if (!post) return null;

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="grid lg:grid-cols-2 gap-12 items-center mb-24 group"
    >
      {post.featuredImage && (
        <img
          src={urlFor(post.featuredImage).width(1200).url()}
          alt={post.title}
          className="rounded-3xl aspect-[4/3] object-cover"
        />
      )}

      <div>

        <CategoryBadge category={post.category} />

        <h2 className="mt-6 text-4xl font-black leading-tight group-hover:text-amber-400 transition">
          {post.title}
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          {post.excerpt}
        </p>

        <div className="mt-8">
          <ReadingTime
            date={post.publishedAt}
          />
        </div>

        <div className="mt-10 text-amber-400 font-semibold">
          Read Article →
        </div>

      </div>
    </Link>
  );
}