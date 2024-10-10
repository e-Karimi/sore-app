import React from "react";
import { Button } from "../ui/button";

export default function AddToCard({ ProductId }: { ProductId: string }) {
  console.log("AddToCard ~ ProductId:", ProductId);
  return (
    <Button size="lg" className="capitalize mt-8">
      add to card
    </Button>
  );
}
