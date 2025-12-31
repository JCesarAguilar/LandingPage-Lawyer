import { P3 } from "@/components/common/Typography";
import { services } from "../../../helpers/services.mock";
import { notFound } from "next/navigation";

export default async function ServiceContent({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const service = services.find((service) => service.slug === slug);

  if (!service) return notFound();

  return (
    <div className="lg:px-20 py-5 md:0">
      <P3 className="text-justify text-black-strong">{service.description}</P3>
    </div>
  );
}
