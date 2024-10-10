import React from "react";
import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa";

export default function FavoritToggleButton({ ProductId, className }: { ProductId: string; className?: string }) {
  console.log("### FavoritToggleButton ~ ProductId:", ProductId);
  return (
    <Button size="icon" variant="outline" className={` cursor-pointer ${className}`}>
      <FaHeart />
    </Button>
  );
}
