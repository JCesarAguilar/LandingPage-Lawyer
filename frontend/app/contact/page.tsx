import Image from "next/image";
import CardAccordion from "@/components/contact/CardAccordion";
import InfoLawyer from "@/components/contact/InfoLawyer";
import { abogados } from "@/helpers/abogado.info";

export default function Contact() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:gap-16 gap-10 lg:py-25 py-22 px-7 bg-white-strong">
        <div className="relative lg:w-1/2 w-full lg:h-180 h-130">
          <Image
            src={abogados[0].image}
            alt={`imagen de ${abogados[0].name}`}
            fill
            className="lg:object-contain object-cover "
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pr-30 ">
          <div className="flex flex-col gap-1">
            <h2 className="lg:text-[27px] text-[24px] font-bold uppercase text-black">
              {abogados[0].name}
            </h2>
            <p className="text-[20px] uppercase text-black">
              {abogados[0].status}
            </p>
          </div>

          <CardAccordion title="Áreas de Práctica" items={abogados[0].areas} />
          <CardAccordion title="Educación" items={abogados[0].education} />
          {abogados[0].publications && (
            <CardAccordion
              title="Publicaciones"
              items={abogados[0].publications}
            />
          )}
        </div>
      </div>

      <InfoLawyer
        resume={abogados[0].resume}
        phone={abogados[0].phone}
        email={abogados[0].email}
      />
    </section>
  );
}
