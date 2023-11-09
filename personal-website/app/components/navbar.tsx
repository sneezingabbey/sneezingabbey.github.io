import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 flex flex-col sm:flex-row items-center justify-center">
      <div className="flex space-x-10 text-2xl">
        <Link href="/" className="text-white/70 hover:text-white">
          Home
        </Link>
        <Link href="/blog" className="text-white/70  hover:text-white">
          Blog
        </Link>
      </div>
    </div>
  );
}
