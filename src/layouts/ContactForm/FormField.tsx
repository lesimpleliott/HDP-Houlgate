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

  // Accès à la fonction Zustand pour mettre à jour la validité du champ
  const setFieldValidity = useContactFormStore(
    (state) => state.setFieldValidity,
  );

  useEffect(() => {
    // Met à jour la validité du champ dans Zustand à chaque changement de `isValid`
    setFieldValidity(name, isValid);
  }, [isValid, name, setFieldValidity]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const inputValue = e.target.value;
    const newIsValid = regex.test(inputValue);

    setValue(inputValue);
    setIsValid(newIsValid);
    setIsTouched(true);
  };

  const commonClass = `
    w-full rounded-lg border-2 transition-color duration-300 shadow-md focus:shadow-lg
    placeholder:text-sm placeholder:font-light placeholder:italic placeholder:text-gray-400 
    ${isValid ? "border-success focus:outline-success" : "border-gray-300 focus:outline-error"}
  `;

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
            className={`contactFormInput ${commonClass} py-1 pl-9 pr-4`}
          />
        ) : (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            rows={6}
            className={`contactFormInput ${commonClass} px-2 py-2`}
          />
        )}
      </div>
      {isTouched && !isValid && (
        <p className="text-error mt-1 px-3 text-xs italic">{errorMessage}</p>
      )}
    </article>
  );
};

export default FormField;
