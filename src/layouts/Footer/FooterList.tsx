import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

type FooterListProps = {
  title: string;
  list?: {
    text: string;
    type: "Navlink" | "External";
    link: string;
  }[];
  children?: React.ReactNode;
};

const FooterList = ({ title, list, children }: FooterListProps) => {
  const { t, i18n } = useTranslation(); 
  return (
    <ul className="mx-auto flex w-full max-w-36 flex-col items-center gap-y-2 text-center">
      {/* TITRE */}
      <h3 className="font-medium text-primary-500">{title}</h3>

      {/* CHILDREN */}
      {children && children}

      {/* LISTE */}
      {list &&
        list.map((item, index) => {
          // Vérifier si l'URL contient "reservit"
          const isReservitLink = item.link.includes("reservit");
          // Construire le lien selon la condition
          const linkHref = isReservitLink
            ? `${item.link}${item.link.includes("?") ? "&" : "?"}lang=${i18n.language}`
            : item.link;

          return (
            <li
              key={index}
              className="leading-4 text-gray-500 hover:text-primary-500 hover:underline"
            >
              {/* NAVLINK - Lien interne */}
              {item.type === "Navlink" && (
                <NavLink to={item.link}>{t(item.text)}</NavLink>
              )}

              {/* LIEN - Lien externe */}
              {item.type === "External" && (
                <a href={linkHref} target="_blank" rel="noreferrer">
                  {t(item.text)}
                </a>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default FooterList;
