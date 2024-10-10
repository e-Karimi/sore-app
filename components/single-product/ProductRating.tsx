import React from "react";
import { FaStar } from "react-icons/fa";

export default function ProductRating({ ProductId }: { ProductId: string }) {
  console.log("ProductRating ~ ProductId:", ProductId);
  return (
    <div className="flex gap-1 items-center text-md mt-1 mb-4">
      ProductRating
      <FaStar className="w-3 h-3" />
      4.2 25 reviews
    </div>
  );
}
