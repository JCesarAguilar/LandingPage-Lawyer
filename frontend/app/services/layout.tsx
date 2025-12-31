import ServiceCTA from "@/components/services/ServiceCTA";
import ServicesMenu from "@/components/services/ServicesMenu";
import React, { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white-smoke lg:px-30 px-5 lg:py-20 grid grid-cols-1 lg:grid-cols-4 py-10 gap-5 md:gap-0 items-start">
      <aside className="lg:col-span-1">
        <ServicesMenu />
      </aside>

      <article className="lg:lg:col-span-2">{children}</article>

      <aside className="lg:col-span-1">
        <ServiceCTA />
      </aside>
    </section>
  );
}
