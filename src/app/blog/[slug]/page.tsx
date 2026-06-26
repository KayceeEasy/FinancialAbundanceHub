import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';

// Next.js App Router requires params to be a Promise
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const fullPath = path.join(process.cwd(), 'content', `${slug}.md`);

  // Check if file exists, if not, trigger a 404
  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="pt-32 px-6 max-w-3xl mx-auto text-white min-h-screen">
      <h1 className="text-5xl font-black mb-4 tracking-tight">{data.title}</h1>
      <p className="text-amber-500 mb-12">{data.date}</p>
      <div 
        className="prose prose-invert prose-lg max-w-none" 
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />
    </main>
  );
}