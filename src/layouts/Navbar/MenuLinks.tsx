import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import useStoreMenu from "../../stores/menu.store";

const menuItems = [
  { title: "menu.home", link: "/" },
  { title: "menu.rooms", link: "/rooms" },
  { title: "menu.prices", link: "/prices" },
  { title: "menu.contact", link: "/contact" },
];

const MenuLinks = ({ className }: { className?: string }) => {
  const { setMenuIsOpen } = useStoreMenu();
  const { t } = useTranslation();

  return (
    <ul
      className={`divide-y divide-gray-200 border-y border-gray-200 md:divide-y-0 md:border-y-0 ${className}`}
    >
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="hover:bg-primary-100 md:hover:bg-inherit md:hover:text-primary-500"
        >
          <NavLink
            className={(nav) =>
              `block py-2 text-center text-xl font-medium md:text-base ${
                nav.isActive && "font-medium text-primary-500"
              }`
            }
            to={item.link}
            onClick={() => setMenuIsOpen(false)}
          >
            {t(item.title)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuLinks;
