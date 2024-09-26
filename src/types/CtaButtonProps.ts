// Type de base
type CtaButtonBase = {
  type: "link" | "Navlink" | "button";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

// Propriétés "link"
type CtaLink = CtaButtonBase & {
  href: string;
  target: string;
  to?: never;
};

// Propriétés "Navlink"
type CtaNavlink = CtaButtonBase & {
  href?: never;
  target?: never;
  to: string;
};

// Propriétés "button"
type CtaButton = CtaButtonBase & {
  href?: never;
  target?: never;
  to?: never;
};

// Type du bouton => lien, NavLink, ou bouton
export type CtaButtonProps = CtaLink | CtaNavlink | CtaButton;
