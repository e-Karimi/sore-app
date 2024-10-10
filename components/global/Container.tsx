import React from "react";
import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("max-auro max-w-6xl xl:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
}

