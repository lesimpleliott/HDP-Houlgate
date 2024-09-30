// Type de base pour les éléments communs du formulaire
type BookingFormElementBase = {
  icon: {
    src: string;
    alt?: string;
  };
  type: "link" | "input";
  className?: string;
};

// Propriétés pour le champ (input)
type BookingFormFieldProps = BookingFormElementBase & {
  href?: never;
  label: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  price?: never;
  nightCount?: never;
  onClick?: never;
};

// Propriétés pour le lien (bouton)
type BookingFormSubmitProps = BookingFormElementBase & {
  href: string;
  label?: never;
  inputProps?: never;
  price: number;
  nightCount: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// Type du formulaire qui peut être soit un input, soit un lien (bouton)
export type BookingFormProps = BookingFormFieldProps | BookingFormSubmitProps;
