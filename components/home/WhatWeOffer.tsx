import Image from "next/image";

export default function WhatWeOffer() {
  return (
    <div className="lg:px-30 bg-white-smoke lg:py-10 flex gap-10">
      <div className="md:w-1/2 relative w-70 h-95 md:h-90">
        <Image
          src="/images/weOffer.webp"
          alt="Que ofrecemos"
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className="md:w-1/2 text-black-strong flex flex-col gap-3 items-baseline">
        <h3 className="text-yellow-strong font-bold text-[22px]">
          Lo Que Ofrecemos
        </h3>
        <p className="text-[30px] font-semibold">
          Brindamos soluciones legales personalizadas para satisfacer sus
          necesidades únicas, garantizando que sus derechos estén protegidos y
          se haga justicia.
        </p>
        <button className="btn-secondary mt-5 ">Ver más</button>
      </div>
    </div>
  );
}
