type FormFieldBase = {
  inputType?: "text" | "textarea";
  label: string;
  name: string;
  regex: RegExp;
  placeholder: string;
  errorMessage: string;
};

export type FormFieldText = FormFieldBase & {
  inputType?: "text"; // Facultatif pour les input text
  iconClass: string; // Obligatoire pour les input text
};

export type FormFieldTextarea = FormFieldBase & {
  inputType: "textarea"; // Obligatoire pour les textarea
  iconClass?: never; // Interdit pour les textarea
};
