import { getSortedPostsData, getPostData, getFormattedDate } from "@/lib/blog/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, author, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center">
      <article className="prose prose-lg prose-slate dark:prose-invert">
        <h1 className="text-3xl mt-4 mb-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-4">{pubDate} by <span className="text-purple-700">{author}</span></p>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
      <p className="mt-6">
        <Link href="/blog">← Back to Blog</Link>
      </p>
    </main>
  );
  
}
