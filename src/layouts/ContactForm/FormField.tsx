import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useContactFormStore from "../../stores/contactForm.store";
import { FormFieldText, FormFieldTextarea } from "../../types/ContactFormProps";

const FormField: React.FC<FormFieldText | FormFieldTextarea> = ({
  label,
  name,
  placeholder,
  iconClass,
  regex,
  inputType = "text",
  errorMessage,
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showError, setShowError] = useState(false);
  const { formWasSubmitted, setFieldValidity, reset } = useContactFormStore();

  // Met à jour la validité du champ dans Zustand à chaque changement de `isValid`
  useEffect(() => {
    setFieldValidity(name, isValid);
  }, [isValid, name, setFieldValidity]);

  // Réinitialise le champ lors de la soumission du formulaire
  useEffect(() => {
    if (reset) {
      setValue("");
      setIsValid(false);
      setIsTouched(false);
      setShowError(false);
    }
  }, [reset]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const inputValue = e.target.value;
    const newIsValid = regex.test(inputValue);

    // Met à jour la valeur et la validité du champ
    setValue(inputValue);
    setIsValid(newIsValid);
    setIsTouched(true);

    // Masque le message d'erreur lorsque l'entrée devient valide
    if (newIsValid) {
      setShowError(false);
    }
  };

  const handleBlur = () => {
    // Affiche le message d'erreur uniquement si le champ n'est pas valide
    if (!isValid && isTouched) {
      setShowError(true);
    }
  };

  // Gestion des classes CSS conditionnelles
  const conditionalClass = [
    // Si le champ est vide et non touché, la bordure est grise
    !value && !isTouched && !formWasSubmitted && "border-gray-300",

    // Si le champ est valide, la bordure est verte
    isValid && "outline-success border-success",

    // Si le champ n'est pas valide et est touché, la bordure est rouge
    !isValid && isTouched && "outline-error border-error",

    // Si le champ est vide et touché, la bordure est rouge
    !value && isTouched && "outline-error border-error",

    // Si le formulaire a été soumis et que le champ est invalide, la bordure est rouge
    (showError || formWasSubmitted) && !isValid && "outline-error border-error",

    // Si le champ est rempli mais non valide, la bordure est rouge
    value && !isValid && "outline-error border-error",

    // Si le champ est rempli et valide, la bordure est verte
    value && isValid && "outline-success border-success",
  ]
    .filter(Boolean)
    .join(" ");

  // Gestion des classes CSS communes
  const commonClass = `w-full rounded-lg border-2 transition-color duration-300 shadow-md focus:shadow-lg
    placeholder:text-sm placeholder:font-light placeholder:italic placeholder:text-gray-400  
    ${conditionalClass}`;

  return (
    <article className="flex w-full flex-col text-left">
      <label className="pl-2 text-sm">{t(label)}</label>
      <div className="relative flex w-full items-center">
        {iconClass && inputType === "text" && (
          <i
            className={`${iconClass} transition-color absolute flex h-full items-center justify-center px-4 duration-300 ${
              !value ? "text-gray-400" : isValid ? "text-success" : "text-error"
            }`}
          ></i>
        )}
        {inputType === "text" ? (
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur} // Ajoute l'événement onBlur
            className={`${commonClass} py-1 pl-9 pr-4`}
          />
        ) : (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur} // Ajoute l'événement onBlur
            rows={6}
            className={`${commonClass} px-2 py-2`}
          />
        )}
      </div>
      {(showError || formWasSubmitted) && !isValid && (
        <p className="mt-1 px-3 text-xs italic text-error">{errorMessage}</p>
      )}
    </article>
  );
};

export default FormField;
