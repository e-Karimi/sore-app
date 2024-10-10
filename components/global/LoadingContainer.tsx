import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "../ui/card";

function LoadingCart() {
  return (
    <Card>
      <CardContent className="p-4 rounded">
        <Skeleton className="w-full  h-64 md:h-48  rounded overflow-hidden" />
        <Skeleton className=" h-4 w-3/4  rounded mt-4" />
        <Skeleton className=" h-4 w-2/4  rounded mt-4" />
      </CardContent>
    </Card>
  );
}

export default function LoadingContainer() {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LoadingCart />
      <LoadingCart />
      <LoadingCart />
    </div>
  );
}
