import React from "react";
import { Separator } from "@/components/ui/separator";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="text-3x font-medium tracking-wider capitalize mb-8">{text}</h2>
      <Separator />
    </div>
  );
}
