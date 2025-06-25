import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl">Page not found</p>
        <Link href="/" className="text-blue-400 underline hover:text-blue-300">
          Go back home
        </Link>
      </div>
    </div>
  );
}
