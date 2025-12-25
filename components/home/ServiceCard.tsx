import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

export default function ServiceCard({ icon, title, items }: ServiceCardProps) {
  return (
    <div className="relative bg-white-strong text-black-strong shadow-md lg:p-6 max-w-sm px-9 py-6">
      <span className="absolute top-0 left-0 h-1 w-full bg-yellow-strong" />

      <div className="flex items-center gap-3 mb-4 hover:text-yellow-strong">
        <div className="text-black-strong text-3xl">{icon}</div>

        <h3 className="font-serif text-lg font-semibold leading-snug text-black-strong">
          {title}
        </h3>
      </div>

      <ul className="space-y-2 text-[14px] text-gray-strong">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-black-soft shrink-0" />
            <span className="leading-relaxed text-black-soft">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
