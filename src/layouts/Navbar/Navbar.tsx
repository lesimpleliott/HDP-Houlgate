import { NavLink } from "react-router-dom";
import useStoreMenu from "../../stores/menu.store";
import BurgerButton from "./BurgerButton";
import MenuLinks from "./MenuLinks";
import MenuSettings from "./MenuSettings";

const Navbar = () => {
  const { menuIsOpen, setMenuIsOpen } = useStoreMenu();

  return (
    <nav
      className={`${menuIsOpen ? "max-h-[1000px]" : "max-h-16"} bg-background md:from-background fixed top-0 z-20 w-full overflow-hidden py-2 shadow-md transition-all duration-300 md:bg-transparent md:bg-gradient-to-b md:from-40% md:to-transparent md:shadow-none md:backdrop-blur`}
    >
      <div
        className={`flex max-w-7xl flex-col gap-2 px-4 md:mx-auto md:flex-row md:px-10`}
      >
        {/* LOGO + BURGER BUTTON */}
        <section className="flex items-center justify-between">
          <NavLink to="/" className="w-12" onClick={() => setMenuIsOpen(false)}>
            <img
              src="./hdpHoulgate_logo.svg"
              alt="Hôtel de la plage Houlgate"
            />
          </NavLink>
          <BurgerButton className="md:hidden" />
        </section>

        {/* MENU / NAVLINKS */}
        <section
          className={`flex flex-1 flex-col gap-2 md:flex-row md:items-center md:justify-end md:gap-4`}
        >
          <MenuLinks className="flex flex-col md:flex-row md:gap-4" />
          <MenuSettings className="flex justify-center gap-10 md:gap-2 py-4 md:py-0" />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
