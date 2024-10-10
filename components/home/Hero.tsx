import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-6xl font-bold text-4xl tracking-tight lg:text-6xl"></h1>
        <p className="mt-8  max-w-xl text-lg text-muted-foreground ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eum exercitationem porro accusamus dolorem saepe!
          Dolore possimus aspernatur error iure.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
