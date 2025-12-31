import Logotype from "./navBar/Logotype";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaLocationPin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { services } from "@/helpers/services.mock";
import { H3, P2 } from "./Typography";

export default function Footer() {
  return (
    <section className="bg-blue-strong lg:px-30 lg:py-10 text-gray-soft text-[15px] px-5 pt-10 pb-5">
      <Logotype />

      <div className=" grid grid-cols-1 lg:grid-cols-3 pt-5 pb-3 lg:gap-25 gap-10">
        <div className="flex flex-col gap-4">
          <P2>
            Estamos a su lado, brindándole asesoramiento legal experto y apoyo
            inquebrantable para proteger sus derechos y garantizar que se haga
            justicia.
          </P2>
          <div className="flex gap-3">
            <div className="btn-media">
              <FaFacebookF />
            </div>
            <div className="btn-media">
              <PiInstagramLogoFill />
            </div>
            <div className="btn-media">
              <FaLinkedin />
            </div>
          </div>
          <div>
            <p className="text-yellow-strong font-semibold pb-1">
              Horario de atención
            </p>
            <P2>Lunes a Viernes: 9:00 am - 16:00 pm</P2>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <H3>Contacto</H3>
          <div className="flex gap-3 items-center">
            <div className="text-yellow-strong text-[18px]">
              <FaPhoneAlt />
            </div>
            <P2>999-999-999</P2>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-yellow-strong text-[18px]">
              <LuMail />
            </div>
            <P2>correo@gmail.com</P2>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-yellow-strong">
              <FaLocationPin />
            </div>
            <P2>Lima - Perú</P2>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <H3>Servicios</H3>
          <ul className="space-y-3">
            {services.slice(0, 5).map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-yellow-strong shrink-0" />
                <P2>{service.title}</P2>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full h-px bg-white/10 my-6" />
      <P2 className="lg:text-left text-center">
        © {new Date().getFullYear()} Canales Hernández Abogados — Todos los
        derechos reservados.
      </P2>
    </section>
  );
}
