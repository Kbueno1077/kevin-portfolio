"use client";

import { ViewTransition, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export function PageViewTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <ViewTransition
      key={pathname}
      name="page-content"
      share="auto"
      enter="auto"
      default="none"
    >
      <div className="h-full w-full">{children}</div>
    </ViewTransition>
  );
}
