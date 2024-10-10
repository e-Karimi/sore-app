import React from "react";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import { fetchSingleProduct } from "@/utils/actions";
import AddToCard from "@/components/single-product/AddToCard";
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import FavoritToggleButton from "@/components/products/FavoritToggleButton";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { id, name, image, description, company, price } = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />

      <div className="grid mt-6 gap-y-6 lg:grid-cols-2 lg:gap-x-14">
        {/* First column : Product Image */}
        <div className="relative h-96">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width:768px)100vw,(max-width:1200px) 50vw,33vw"
            className="object-cover rounded-md w-full"
          />
        </div>
        {/* Second column : Product Info */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl p-x-8">{name}</h1>
            <FavoritToggleButton ProductId={id} />
          </div>

          <ProductRating ProductId={id} />
          <h4 className="text-xl mt-2 font-bold">{company} </h4>
          <span className="text-md bg-muted p-2 mt-3 rounded inline-block font-semibold"> {dollarAmount}</span>
          <p className="text-base mt-6 text-muted-foreground leading-8">{description}</p>
          <AddToCard ProductId={id} />
        </div>
      </div>
    </section>
  );
}
