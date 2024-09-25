// Type de base pour les éléments communs du formulaire
type BookingFormElementBase = {
  icon: {
    src: string;
    alt?: string;
  };
  type: "button" | "input";
};

// Propriétés pour le champ (input)
type BookingFormFieldProps = BookingFormElementBase & {
  label: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  price?: never;
  nightCount?: never;
  onClick?: never;
};

// Propriétés pour le bouton
type BookingFormSubmitProps = BookingFormElementBase & {
  label?: never;
  inputProps?: never;
  price: number;
  nightCount: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

// Type du formulaire qui peut être soit un input, soit un bouton
export type BookingFormProps = BookingFormFieldProps | BookingFormSubmitProps;
