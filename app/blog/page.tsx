import Posts from '../components/blog/posts';

export const metadata = {
  title: "Blog"
}

export default function Blog() {
  return (
    <main className="px-6 mx-aut">
      <Posts />
    </main>
  );
}