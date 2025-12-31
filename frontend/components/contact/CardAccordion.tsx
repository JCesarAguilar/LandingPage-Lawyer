"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { H2, P2 } from "../common/Typography";

interface CardAccordionProps {
  title: string;
  items: string[];
}

export default function CardAccordion({ title, items }: CardAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b pl-5 pr-2 pt-4 ${
        open ? "bg-gray-soft" : "bg-white-strong"
      }`}
    >
      <div className="flex w-full justify-between items-center text-black">
        <H2>{title}</H2>
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full bg-gray-soft flex items-center justify-center cursor-pointer hover:bg-yellow-strong"
        >
          {open ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] mt-2 pb-10" : "grid-rows-[0fr] pb-2"
        }`}
      >
        <div className="overflow-hidden leading-relaxed">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex gap-3 items-baseline">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-strong shrink-0" />
                <P2 className="text-black-strong">{item}</P2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
