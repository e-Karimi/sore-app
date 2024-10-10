import React from "react";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/format";
import FavoritToggleButton from "./FavoritToggleButton";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="pt-12">
      {products.map((product) => {
        const { id, name, price, image } = product;
        const dollarsAmount = formatCurrency(price);
        return (
          <article key={id} className=" group relative my-5 max-w-[800px]">
            <Link href={`/products/${id}`}>
              <Card className="group-hover:shadow-xl transform transition-shadow duration-500">
                <CardContent className="p-4 flex items-center gap-x-2">
                  <div className="relative  xsm:w-32  xsm:h-32 sm:w-40  sm:h-40 md:w-56 md:h-44 overflow-hidden rounded ">
                    <Image
                      src={image}
                      alt={name}
                      priority
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw"
                      className="object-cover transform  transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className=" xsm:h-32 xsm:w-32  flex xsm:flex-col  xsm:justify-between  xsm:items-start sm:flex-row sm:justify-between  lg:justify-around sm:items-start sm:w-full font-semibold ">
                    <div className="xsm:text-sm sm:text-lg  lg:text-xl  line-clamp-1 ">{name}sm:items-start</div>
                    <div className="text-muted-foreground text-sm sm:text-base lg:text-xl ">{dollarsAmount}</div>
                    <div className="">
                      <FavoritToggleButton ProductId={id} className="p-1 text-gray-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
