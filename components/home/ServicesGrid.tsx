import ServiceCard from "./ServiceCard";
import { services } from "@/helpers/services.mock";

export default function ServicesGrid() {
  return (
    <section className="lg:px-30 pb-10 bg-white-smoke px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={<service.icon />}
            title={service.title}
            items={service.items}
          />
        ))}
      </div>
    </section>
  );
}
