import React from "react";
import { navLinks } from "@/utils/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserIcon from "@/components/navbar/UserIcon";
import SignOutLink from "@/components/navbar/SignOutLink";
import { SignInButton, SignOutButton, SignUpButton, SignedOut, SignedIn } from "@clerk/nextjs";

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end" sideOffset={10}>
        <>
          <DropdownMenuItem>
            <Link href="/" className="capitalize w-full">
              home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about" className="capitalize w-full">
              about
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/products" className="capitalize w-full">
              products
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* When user is logged out */}
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="text-left w-full">Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="text-left w-full">Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>
          {/* When user is logged in */}
          <SignedIn>
            <>
              <DropdownMenuLabel className="capitalize w-full">my account</DropdownMenuLabel>
              {navLinks.map((navLink) => (
                <DropdownMenuItem key={navLink.label}>
                  <Link href={navLink.href} className="capitalize w-full">
                    {navLink.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <SignOutButton>
                  <SignOutLink />
                </SignOutButton>
              </DropdownMenuItem>
            </>
          </SignedIn>
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
