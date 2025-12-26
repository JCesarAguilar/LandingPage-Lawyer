import { FaGavel, FaBriefcase, FaUserTie } from "react-icons/fa";
import { GiMining } from "react-icons/gi";

export const services = [
  {
    slug: "litigacion",
    title: "Litigación y Solución de Controversias",
    icon: FaGavel,
    items: [
      "Crimen organizado.",
      "Lavado de activos.",
      "Extinsión de dominio.",
      "Procesos constitucionales.",
      "Litigios civiles.",
    ],
    description: `Ofrecemos representación legal especializada en la resolución de conflictos complejos, incluyendo crimen organizado, lavado de activos, extinción de dominio y procesos constitucionales. Actuamos con rigor técnico y estrategia jurídica para proteger los derechos e intereses de nuestros clientes, asumiendo también litigios civiles cuando el caso lo requiere.`,
  },
  {
    slug: "cumplimiento-normativo",
    title: "Cumplimiento Normativo",
    icon: FaBriefcase,
    items: [
      "Prevención de lavado de activos",
      "Cumplimiento de normativas nacionales e internacionales.",
      "Asesoría en responsabilidad administrativa y penal empresarial.",
    ],
    description: `Brindamos asesoría especializada en cumplimiento normativo, ayudando a empresas y organizaciones a prevenir riesgos legales, administrativos y penales. Diseñamos e implementamos políticas de prevención de lavado de activos, asegurando el cumplimiento de normativas nacionales e internacionales. Nuestro enfoque integral protege la continuidad del negocio y fortalece la transparencia, la ética y la responsabilidad corporativa.`,
  },
  {
    slug: "mineria-exportacion",
    title: "Mineria y exportación",
    icon: GiMining,
    items: [
      "Asesoría legal en proyectos mineros.",
      "Permisos, licencias y cumplimiento regulatorio.",
      "Contratos de exportación y comercio internacional.",
      "Cumplimiento ambiental y normativo del sector.",
    ],
    description: `Ofrecemos asesoría legal especializada en proyectos mineros y operaciones de exportación, acompañando a nuestros clientes en la obtención de permisos, licencias y el cumplimiento del marco regulatorio vigente. Brindamos soporte integral en contratos de comercio internacional, garantizando seguridad jurídica, cumplimiento ambiental y normativo, y una gestión eficiente de los riesgos propios del sector.`,
  },
  {
    slug: "asesoria-legal",
    title: "Asesoría Legal",
    icon: FaUserTie,
    items: [
      "Compra de bienes inmuebles rematados - REMAJU",
      "Pensión de alimentos y filiación extramatrimonial",
      "Exportación y trazabilidad minera.",
      "División y participación de inmueble",
    ],
    description: `Brindamos asesoramiento jurídico integral en asuntos patrimoniales, familiares y administrativos, acompañando a nuestros clientes en la compra de bienes inmuebles rematados (REMAJU), procesos de pensión de alimentos y filiación extramatrimonial, así como en la división y participación de inmuebles. Además, ofrecemos soporte legal en exportación y trazabilidad minera, garantizando seguridad jurídica y cumplimiento normativo.`,
  },
];
