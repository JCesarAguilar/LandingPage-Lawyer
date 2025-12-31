import { PATHROUTES } from "@/helpers/navItems";
import Link from "next/link";

export default function Contact() {
  return (
    <Link
      href={PATHROUTES.CONTACT}
      className="btn-secondary z-10 hidden md:block"
    >
      Contacto
    </Link>
  );
}
