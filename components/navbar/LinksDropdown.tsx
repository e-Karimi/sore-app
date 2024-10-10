import React from "react";
import { navLinks } from "@/utils/links";
import { LuAlignLeft } from "react-icons/lu";
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

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
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
          <DropdownMenuSeparator></DropdownMenuSeparator>

          <DropdownMenuLabel className="capitalize w-full">my account</DropdownMenuLabel>
          {navLinks.map((navLink) => (
            <DropdownMenuItem key={navLink.label}>
              <Link href={navLink.href} className="capitalize w-full">
                {navLink.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
