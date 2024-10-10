import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadCrumbs({ name }: { name: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* BreadCrumbs Item  */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-lg capitalize">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {/* BreadCrumbs Item  */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/products" className="text-lg capitalize">
            products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {/* BreadCrumbs Item  */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-lg capitalize">{name}</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </BreadcrumbList>
    </Breadcrumb>
  );
}
