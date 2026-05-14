"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="max-w-md text-sm text-neutral-400">
            A critical error occurred. Please try again.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full bg-[#9377FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7e65d8]"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
