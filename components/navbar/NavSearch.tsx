"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter } from "next/navigation";

export default function NavSearch() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const router = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    console.log(params.toString());

    router.replace(`/products?${params.toString()}`);
  }, 500);

  return (
    <Input
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
      type="text"
      placeholder="Search product..."
      className="max-w-xs dark:bg-muted"
    />
  );
}
