import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useContactFormStore from "../../stores/contactForm.store";
import { sendEmail } from "../../utils/emailService";

const FormSubmitButton = ({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement>;
}) => {
  const { t } = useTranslation();
  const { formIsValid, fieldValidity, setReset, setFormWasSubmitted } =
    useContactFormStore();
  const [buttonColor, setButtonColor] = useState("bg-gray-400");
  const [buttonText, setButtonText] = useState(t("contact.form.submit.send"));
  const [invalidInputsCount, setInvalidInputsCount] = useState(0);

  // Compte le nombre de champs invalides
  useEffect(() => {
    const countInvalidFields = Object.values(fieldValidity).filter(
      (valid) => !valid,
    ).length;
    setInvalidInputsCount(countInvalidFields);
  }, [fieldValidity]);

  // Change la couleur du bouton en fonction de la validité du formulaire
  useEffect(() => {
    setButtonColor(formIsValid ? "bg-success" : "bg-gray-400");
  }, [formIsValid]);

  // Gère le clic sur le bouton
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormWasSubmitted(true);

    // LE FORMULAIRE N'EST PAS VALIDE
    if (!formIsValid || !formRef.current) {
      setButtonColor("bg-red-500 animate-shake ");
      setButtonText(
        t("contact.form.submit.invalid", { count: invalidInputsCount }),
      );
      setTimeout(() => {
        setButtonText(t("contact.form.submit.send"));
        setButtonColor(
          "bg-gray-400 transition-colors duration-500 ease-in-out",
        );
      }, 2000);
      return;
    }

    // LE FORMULAIRE EST VALIDE
    setButtonText(t("contact.form.submit.sending"));
    try {
      // SUCCESS
      await sendEmail(formRef.current);
      setButtonColor("bg-green-600");
      setButtonText(t("contact.form.submit.success"));
      setReset(true);
      setTimeout(() => setReset(false), 250); // Désactive `reset` après un court délai pour éviter les boucles
      setFormWasSubmitted(false);
    } catch (err) {
      // ERROR
      console.error(err);
      setButtonColor("bg-red-600");
      setButtonText(t("contact.form.submit.error"));
    } finally {
      setTimeout(() => {
        setButtonText(t("contact.form.submit.send"));
      }, 2500);
    }
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`w-1/2 rounded-lg p-2 text-lg font-medium text-white ${buttonColor}`}
    >
      {buttonText}
    </button>
  );
};

export default FormSubmitButton;
