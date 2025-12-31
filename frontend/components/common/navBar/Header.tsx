import { BurgerMenu } from "./BurgerMenu";
import Contact from "./Contact";
import Logotype from "./Logotype";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <section className="bg-blue-strong flex lg:px-30 justify-between items-center px-5">
      <Logotype />
      <NavBar />
      <Contact />
      <BurgerMenu />
    </section>
  );
}
