import { useTranslation } from "react-i18next";
import { BookingFormProps } from "../../types/BookingFormProps";

const BookingFormElement = ({
  type,
  icon,
  label,
  inputProps,
  price,
  nightCount,
  onClick,
}: BookingFormProps) => {
  const { t } = useTranslation();

  // Styles communs pour chaque type de champ de formulaire
  const buttonBase =
    "flex flex-col items-center justify-center p-4 md:flex-row md:gap-2";
  const iconBase = "w-16 md:w-10";
  const textWrapperBase =
    "flex flex-col items-center justify-center md:items-start";
  const titleBase = "w-full text-center md:text-left";
  const inputBase =
    "w-full min-w-28 max-w-32 bg-transparent text-center md:text-left";

  // Styles spécifiques champ de formulaire de type input
  if (type === "input" && inputProps) {
    return (
      <label htmlFor={inputProps.id} className={`bg-background ${buttonBase}`}>
        <img src={icon.src} alt={icon.alt} className={`${iconBase}`} />
        <div className={`${textWrapperBase}`}>
          <p className={`${titleBase} text-gray-400`}>{label}</p>
          <input {...inputProps} className={`${inputBase}`} />
        </div>
      </label>
    );
  }

  // Styles spécifiques champ de formulaire de type bouton
  if (type === "button" && price !== undefined && nightCount !== undefined) {
    return (
      <button
        onClick={onClick}
        className={`bg-primary-500 hover:bg-primary-400 ${buttonBase}`}
      >
        <img src={icon.src} alt={icon.alt} className={`${iconBase}`} />
        <div className={`${textWrapperBase}`}>
          <p className={`${titleBase} text-white`}>
            {`${nightCount} ${t("night", { count: nightCount })}`}
          </p>
          <p
            className={`${inputBase} text-white`}
          >{`${t("from")} ${price}€`}</p>
        </div>
      </button>
    );
  }

  return null;
};

export default BookingFormElement;
