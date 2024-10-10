import React from "react";

export default async function AboutPage() {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-x-6 text-4xl sm:text-6xl font-semibold capitalize">
        <h1 className=" leading-none tracking-wide ">we love</h1>
        <span className=" text-3xl sm:text-5xl font-semibold bg-primary px-4 py-2 rounded-lg tracking-widest text-white">
          store
        </span>
      </div>
      <p className="mt-6 text-lg text-muted-foreground tracking-wide leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, amet ad voluptatum molestias commodi quas
        aperiam dolores voluptatibus incidunt impedit repudiandae maiores corrupti accusantium minus. Numquam
        aspernatur, eius reprehenderit assumenda magnam veniam harum amet rem saepe consectetur omnis id nulla.
      </p>
    </section>
  );
}
