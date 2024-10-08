// Type de base
type CtaButtonBase = {
  type: "link" | "Navlink" | "button";
  children: React.ReactNode;
  className?: string;
  color?: "main" | "secondary";
};

// Propriétés "link"
type CtaLink = CtaButtonBase & {
  href: string;
  target?: string;
  to?: never;
  onClick?: () => void;
};

// Propriétés "Navlink"
type CtaNavlink = CtaButtonBase & {
  href?: never;
  target?: never;
  to: string;
  onClick?: () => void;
};

// Propriétés "button"
type CtaButton = CtaButtonBase & {
  href?: never;
  target?: never;
  to?: never;
  onClick: () => void;
};

// Type du bouton => lien, NavLink, ou bouton
export type CtaButtonProps = CtaLink | CtaNavlink | CtaButton;
