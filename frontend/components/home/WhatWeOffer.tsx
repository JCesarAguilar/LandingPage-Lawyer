import Image from "next/image";
import Link from "next/link";
import { PATHROUTES } from "@/helpers/navItems";

export default function WhatWeOffer() {
  return (
    <div className="lg:px-30 bg-white-smoke lg:py-10 flex flex-col-reverse lg:flex-row lg:gap-10 gap-7 px-5 py-7">
      <div className="aspect-2/1 w-full md:w-1/2 md:h-auto relative">
        <Image
          src="/images/weOffer.webp"
          alt="Que ofrecemos"
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className="md:w-1/2 text-black-strong flex flex-col gap-3 lg:items-baseline items-center">
        <h3 className="text-yellow-strong font-bold lg:text-[22px] text-[20px]">
          Lo Que Ofrecemos
        </h3>
        <p className="lg:text-[30px] text-[17px] text-center lg:text-left font-semibold">
          Brindamos soluciones legales personalizadas para satisfacer sus
          necesidades únicas, garantizando que sus derechos estén protegidos y
          se haga justicia.
        </p>
        <Link
          href={PATHROUTES.SERVICES}
          className="btn-secondary mt-5 hidden md:block"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
