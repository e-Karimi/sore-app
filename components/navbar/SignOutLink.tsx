"use client";

import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function SignOutLink() {
  const { toast } = useToast();

  const handleSignOut = () => {
    toast({ description: "Logout Successful!!" });
  };

  return (
    <SignOutButton>
      <Link href="/" onClick={handleSignOut} className="w-full text-left">
        Logout
      </Link>
    </SignOutButton>
  );
}
