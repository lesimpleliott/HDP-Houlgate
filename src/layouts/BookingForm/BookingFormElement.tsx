import { useTranslation } from "react-i18next";
import { BookingFormProps } from "../../types/BookingFormProps";

const BookingFormElement = ({
  type,
  icon,
  label,
  inputProps,
  price,
  nightCount,
  href,
  className,
}: BookingFormProps) => {
  const { t } = useTranslation();

  // Styles communs pour chaque type de champ de formulaire
  const base =
    "flex flex-col items-center justify-center p-4 md:flex-row md:gap-2";
  const iconBase = "w-14 md:w-8 ";
  const textWrapperBase =
    "flex flex-col items-center justify-center md:items-start";
  const lineOne = "text-center md:text-left";
  const lineTwo = "bg-transparent text-center w-full text-nowrap md:text-left";

  // Styles spécifiques champ de formulaire de type input
  if (type === "input" && inputProps) {
    return (
      <label
        htmlFor={inputProps.id}
        className={`bg-background ${base} ${className}`}
      >
        <img src={icon.src} alt={icon.alt} className={`${iconBase} `} />
        <div className={`${textWrapperBase}`}>
          <p className={`${lineOne} text-gray-400`}>{label}</p>
          <input
            {...inputProps}
            className={`${lineTwo} ${inputProps.className}`}
          />
        </div>
      </label>
    );
  }

  // Styles spécifiques champ de formulaire de type bouton
  if (type === "link" && price && nightCount) {
    return (
      <a
        href={href}
        target="_blank"
        className={`bg-primary-500 hover:bg-primary-400 ${base} ${className}`}
      >
        <img src={icon.src} alt={icon.alt} className={`${iconBase}`} />
        <div className={`${textWrapperBase}`}>
          <p className={`${lineOne} text-white`}>
            {`${nightCount} ${t("bookingForm.night", { count: nightCount })}`}
          </p>
          <p
            className={`${lineTwo} text-white`}
          >{`${t("bookingForm.from")} ${price}€`}</p>
        </div>
      </a>
    );
  }

  return null;
};

export default BookingFormElement;
