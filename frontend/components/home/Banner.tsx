import Image from "next/image";
import { P1, TitleBanner } from "../common/Typography";
import Waves from "./Waves";
import Underline from "./Underline";

export default function Banner() {
  return (
    <section className=" bg-blue-strong text-white-smoke lg:px-30 lg:pt-10 lg:pb-20 px-5 pt-15 pb-10 ">
      <Waves />
      <div className="absolute inset-0 z-0 pointer-events-none"></div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-7 justify-center items-baseline">
          <TitleBanner className="text-3xl md:text-5xl lg:text-5xl font-serif leading-tight">
            Convirtiendo retos legales <br />
            <span className="relative inline-block">
              en resultados concretos.
              <span className="absolute lg:left-24 lg:-bottom-6 lg:w-full w-70 left-14 -bottom-4">
                <Underline />
              </span>
            </span>
          </TitleBanner>

          <P1 className="mt-6 text-gray-medium lg:text-[18px] max-w-140">
            Estamos a su lado, brindándole asesoramiento legal experto y apoyo
            inquebrantable para proteger sus derechos y garantizar que se haga
            justicia.
          </P1>

          <a
            href="https://wa.me/51944785503?text=Hola,%20quisiera%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 z-10"
          >
            Agenda una consulta
          </a>
        </div>

        <div className="justify-center md:justify-end hidden md:flex">
          <div className="relative w-70 h-95 md:w-95 md:h-130">
            <Image
              src="/images/foto-abogado.webp"
              alt="Doctor Jesus Canales Abogado"
              fill
              className="object-cover rounded-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
