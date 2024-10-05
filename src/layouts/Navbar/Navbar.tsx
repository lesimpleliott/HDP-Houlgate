import { NavLink } from "react-router-dom";
import LogoHDP from "../../components/LogoHDP";
import useStoreMenu from "../../stores/menu.store";
import BurgerButton from "./BurgerButton";
import MenuLinks from "./MenuLinks";
import MenuSettings from "./MenuSettings";

const Navbar = () => {
  const { menuIsOpen, setMenuIsOpen } = useStoreMenu();

  return (
    <nav
      className={`${menuIsOpen ? "max-h-[1000px]" : "max-h-16"} fixed top-0 z-20 w-full overflow-hidden bg-background py-2 shadow-md transition-all duration-300 md:bg-background/60 md:shadow-none md:backdrop-blur`}
    >
      <div
        className={`max-w-custom flex flex-col gap-2 md:mx-auto md:flex-row`}
      >
        {/* LOGO + BURGER BUTTON */}
        <section className="flex items-center justify-between">
          <NavLink to="/" className="w-12" onClick={() => setMenuIsOpen(false)}>
            <LogoHDP type="icon" className="fill-primary-500" />
          </NavLink>
          <BurgerButton className="md:hidden" />
        </section>

        {/* MENU / NAVLINKS */}
        <section
          className={`flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-end md:gap-4`}
        >
          <MenuLinks className="flex flex-col md:flex-row md:gap-4" />
          <MenuSettings className="flex justify-center gap-10 py-4 md:gap-2 md:py-0" />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
