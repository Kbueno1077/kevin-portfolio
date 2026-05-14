import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-2xl font-semibold text-white">Page not found</h1>
      <p className="text-sm text-neutral-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#9377FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7e65d8]"
      >
        Go home
      </Link>
    </div>
  );
}
