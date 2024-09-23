import { NavLink } from "react-router-dom";

type CtaButtonProps = {
  type: "link" | "Navlink" | "button";
  to?: string; // seulement pour type="link" et type="Navlink"
  onClick?: () => void; // seulement pour type="button"
  children: React.ReactNode; // contenu du bouton
  className?: string;
};

const CtaButton = ({
  type,
  to,
  onClick,
  children,
  className,
}: CtaButtonProps) => {
  // Styles de base du bouton
  const baseStyle =
    "bg-primary-500 hover:bg-primary-400 min-w-24 h-10 text-sm rounded-full px-4 flex justify-center items-center font-medium text-white shadow-md";

  // Rendu conditionnel du bouton en tant que lien <a>
  if (type === "link" && to) {
    return (
      <a href={to} className={`${baseStyle} ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }

  // Rendu conditionnel du bouton en tant que lien <NavLink>
  if (type === "Navlink" && to) {
    return (
      <NavLink
        to={to}
        className={`${baseStyle} ${className}`}
        onClick={onClick}
      >
        {children}
      </NavLink>
    );
  }

  // Rendu conditionnel du bouton en tant que bouton <button>
  if (type === "button" && onClick) {
    return (
      <button onClick={onClick} className={`${baseStyle} ${className}`}>
        {children}
      </button>
    );
  }

  return null;
};

export default CtaButton;
