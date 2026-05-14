"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-2xl font-semibold text-white">
        Something went wrong
      </h1>
      <p className="max-w-md text-sm text-neutral-400">
        An unexpected error occurred. You can try again or return to the
        homepage.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-[#9377FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7e65d8]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-neutral-600 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:bg-neutral-900"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
