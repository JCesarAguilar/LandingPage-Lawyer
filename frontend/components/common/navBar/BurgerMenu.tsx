"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { publicNavItems } from "../../../helpers/navItems";
import Link from "next/link";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden relative flex z-20">
      <button onClick={toggleMenu}>
        <GiHamburgerMenu className="text-white-smoke text-2xl" />
      </button>

      {/* Menú deslizante */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/50 bg-opacity-50"
            onClick={closeMenu}
          />

          <div className="absolute right-0 top-0 w-64 h-full bg-white-smoke shadow-lg p-6 z-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-yellow-strong">Menú</h2>
              <button onClick={closeMenu}>
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            <ul className="space-y-4">
              {publicNavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.route}
                    onClick={closeMenu}
                    className="text-gray-800 text-lg block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
