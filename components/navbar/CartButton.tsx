import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button asChild variant="outline" size="icon" className="flex justify-center items-center relative">
      <Link href="/cart">
        <span className="absolute -top-3 -right-3 h-6 w-6  bg-primary text-white rounded-full flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
        <LuShoppingCart className="text-lg" />
      </Link>
    </Button>
  );
}
