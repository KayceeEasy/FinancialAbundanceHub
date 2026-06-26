import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black mb-16">Insights</h1>
      <div className="space-y-8">
        {allPostsData.map(({ id, date, title }) => (
          <Link href={`/blog/${id}`} key={id} className="block p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-amber-500 text-sm">{date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}