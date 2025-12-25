export enum PATHROUTES {
  HOME = "/",
  SERVICES = "/services",
  CONTACT = "/contact",
}

export const publicNavItems = [
  {
    name: "Inicio",
    route: PATHROUTES.HOME,
    prefetch: true,
  },
  {
    name: "Servicios",
    route: PATHROUTES.SERVICES,
    prefetch: true,
  },
  {
    name: "Contacto",
    route: PATHROUTES.CONTACT,
    prefetch: true,
  },
];
