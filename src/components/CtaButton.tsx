/**
 * Composant de bouton d'appel à l'action (CTA) avec rendu conditionnel.
 *
 * 1- Déterminer le type de bouton à afficher.
 * @param {string} props.type - Le type de bouton ("link", "Navlink", "button").
 * @param {string} props.color (option) - La couleur du bouton ("main" ou "secondary") - par défaut "main".
 *
 * 2- Props communes à tous les types de bouton.
 * @param {React.ReactNode} props.children - Les éléments enfants à afficher à l'intérieur du cta (texte, icône, etc.).
 * @param {string} props.className (option) - Les classes CSS supplémentaires à appliquer au bouton.
 *
 * 3- Props spécifiques au type "link".
 * @param {string} props.href - L'URL à utiliser pour le lien.
 * @param {string} props.target (option) - La cible du lien (par exemple, "_blank" pour ouvrir dans un nouvel onglet).
 *
 * 4- Props spécifiques au type "Navlink".
 * @param {string} props.to - La destination du lien (par exemple, "/home").
 *
 * 5- Props spécifiques au type "button".
 * @param {Function} props.onClick - La fonction à appeler lors du clic sur le bouton.
 *
 * @returns {JSX.Element|null} - Le bouton rendu ou null si le type n'est pas reconnu.
 */

import { NavLink } from "react-router-dom";
import { CtaButtonProps } from "../types/CtaButtonProps";

const CtaButton = ({
  type,
  children,
  className,
  color = "main",
  href,
  target,
  to,
  onClick,
}: CtaButtonProps) => {
  // Styles de base du bouton
  const main = "bg-primary-500 hover:bg-primary-400 text-white";
  const secondary =
    "bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white";

  const baseStyle = `cursor-pointer min-w-24 h-10 text-sm rounded-full px-4 flex justify-center items-center font-medium shadow-md ${color === "main" ? main : secondary}`;

  // Rendu conditionnel du bouton en tant que lien <a>
  if (type === "link") {
    return (
      <a
        href={href}
        target={target}
        className={`${baseStyle} ${className}`}
        onClick={onClick}
      >
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
