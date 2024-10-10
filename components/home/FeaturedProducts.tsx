import React from "react";
import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

export default async function FeaturedProducts() {
  const featuredProducts = await fetchFeaturedProducts();

  return (
    <>
      {featuredProducts.length === 0 ? (
        <EmptyList />
      ) : (
        <section className="pt-24">
          <SectionTitle text="Featured Products" />
          <ProductsGrid products={featuredProducts} />
        </section>
      )}
    </>
  );
}
