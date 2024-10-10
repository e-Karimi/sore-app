import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { VscVscode } from "react-icons/vsc";

export default function Logo() {
  return (
    <div>
      <Button asChild size="icon" variant="outline">
        <Link href="/">
          <VscVscode className="w-6 h-6 text-primary" />
        </Link>
      </Button>
    </div>
  );
}
