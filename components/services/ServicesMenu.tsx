"use client";

import { services } from "@/helpers/services.mock";
import Link from "next/link";
import { H2 } from "../common/Typography";
import { usePathname } from "next/navigation";

export default function ServicesMenu() {
  const pathname = usePathname();

  return (
    <ul className="space-y-4 text-black-strong font-bold text-center">
      <H2 className="lg:pb-3 pb-1">Nuestros Servicios</H2>
      {services.map((service) => (
        <li key={service.slug}>
          <Link
            href={`/services/${service.slug}`}
            className={`block px-4 py-2 rounded bg-gray-special hover:bg-yellow-strong hover:text-black transition lg:text-[18px] text-[16px] ${
              pathname === `/services/${service.slug}`
                ? "bg-yellow-strong "
                : "bg-gray-special"
            }`}
          >
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
