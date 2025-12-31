import { P3 } from "@/components/common/Typography";
import Image from "next/image";

export default function ServicesIndex() {
  return (
    <div className="h-full flex-col justify-center items-center hidden md:flex">
      <Image
        src="/images/themis.webp"
        alt="temhis image"
        width={400}
        height={200}
      />
      <P3 className="text-[20px] text-center text-black-strong">
        Selecciona un servicio para ver el detalle.
      </P3>
    </div>
  );
}
