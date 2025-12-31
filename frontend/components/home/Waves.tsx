import Image from "next/image";

export default function Waves() {
  return (
    <>
      <Image
        src="/path (Stroke).svg"
        alt="Decorative waves"
        fill
        className="object-cover opacity-40 z-0"
        priority
      />
    </>
  );
}
