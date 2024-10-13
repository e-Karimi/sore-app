import React from "react";
import type { Metadata } from "next";
import AdimnSidebar from "@/app/admin/Sidebar";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl p-4 capitalize">dashboard</h2>
      <Separator className="" />
      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <AdimnSidebar />
        </div>
        <div className="lg:col-span-10 px-4">{children}</div>
      </section>
    </>
  );
}
