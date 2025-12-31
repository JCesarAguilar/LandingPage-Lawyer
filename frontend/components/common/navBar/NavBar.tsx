import Link from "next/link";
import { publicNavItems } from "@/helpers/navItems";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center lg:px-10 px-5 h-[8vh] bg-blue-strong text-white-smoke lg:h-[10vh]">
      <ul className="space-x-5 hidden lg:flex lg:items-center lg:gap-3">
        {publicNavItems.map((item, index) => (
          <li key={index} className="nav-items z-10">
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
