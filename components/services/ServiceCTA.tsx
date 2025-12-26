import { H2, P3 } from "../common/Typography";

export default function ServiceCTA() {
  return (
    <div className="bg-blue-strong text-white px-6 lg:py-20 py-7 rounded-xl">
      <H2 className="mb-4 text-center">Agende una consultoría</H2>
      <P3 className="text-center mb-6">
        Modalidad virtual o presencial
        <br />
        Tiempo: 45 minutos
      </P3>
      <button className="btn-secondary w-full">WhatsApp</button>
    </div>
  );
}
