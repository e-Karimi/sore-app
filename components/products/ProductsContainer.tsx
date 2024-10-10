import React from "react";
import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";
import Link from "next/link";
import { fetchProducts } from "@/utils/actions";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { LuLayoutGrid, LuList } from "react-icons/lu";

export default async function ProductsContainer({ layout, search }: { layout: string; search: string }) {
  const products = await fetchProducts({ search });
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <div>
      {/* HEADE */}
      <section className="flex justify-between items-center ">
        <h4 className="text-lg font-medium">
          {products.length} Product{products.length > 1 && "s"}
        </h4>
        <div className="flex items-center gap-x-3">
          <Button asChild size="icon" variant={layout === "list" ? "default" : "ghost"}>
            <Link href={`products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
          <Button asChild size="icon" variant={layout === "grid" ? "default" : "ghost"}>
            <Link href={`products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>
        </div>
      </section>
      <Separator className="mt-4" />
      {/* PRODUCTS */}
      <div>
        {products.length === 0 ? (
          <h5 className="text-2xl mt-16"> Sorry, no products matched yoursearch...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </div>
  );
}
