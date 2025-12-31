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

      <a
        href="https://wa.me/51944785503?text=Hola,%20quisiera%20agendar%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary block text-center"
      >
        WhatsApp
      </a>
    </div>
  );
}
