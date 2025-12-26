import Logo from "./Logo";

export default function Logotype() {
  return (
    <div className="flex gap-3 items-center">
      <Logo />
      <h2 className="text-white-smoke lg:text-[18px] font-bold">
        Canales Hernández Abogados
      </h2>
    </div>
  );
}
