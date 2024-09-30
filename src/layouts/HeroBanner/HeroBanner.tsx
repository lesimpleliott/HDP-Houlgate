import { Trans, useTranslation } from "react-i18next";
import LogoHDP from "../../components/LogoHDP";
import BookingForm from "../BookingForm/BookingForm";

const HeroBanner = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  // Fonction pour générer les paragraphes
  const generateParagraphs = () => {
    const paragraphsArray = t("home_paragraph", {
      returnObjects: true,
    }) as string[];
    return paragraphsArray.map((index) => (
      <p key={index}>
        <Trans
          i18nKey={index}
          components={{ strong: <strong />, nbsp: <>&nbsp;</> }}
        />
      </p>
    ));
  };

  const titleContent = (
    <h1 className="md:text-primary-500 text-center text-5xl font-medium text-white md:text-left">
      <span className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-end md:justify-start">
        <LogoHDP className="w-16 md:w-12" />
        <p>Houlgate</p>
      </span>
      <p className="mr-1 inline">{t("home_title")}</p>
      <i className="fa-solid fa-star inline align-super text-xs"></i>
      <i className="fa-solid fa-star inline align-super text-xs"></i>
    </h1>
  );

  return (
    <>
      {/* MOBILE */}
      <section
        className={`flex flex-col items-center gap-4 pt-16 md:hidden ${className}`}
      >
        {titleContent}
        <div className="order-3 flex flex-col gap-3 px-4 md:px-20">
          {generateParagraphs()}
        </div>
        <img
          src="/photos/hotel/Hoteldelaplage-Houlgate.webp"
          alt="Façade de l'Hôtel de la plage à Houlgate"
          className="absolute top-16 -z-10 h-[500px] w-full object-cover brightness-50"
        />
        <BookingForm className="order-2" />
      </section>

      {/* DESKTOP */}
      <section
        className={`relative mx-10 hidden max-w-6xl flex-wrap overflow-hidden rounded-bl-[75px] rounded-tr-[75px] bg-white shadow-lg md:flex ${className}`}
      >
        <div className="flex w-1/2 flex-col gap-4 px-10 pb-36 pt-10">
          {titleContent}
          <div className="flex flex-col gap-2">{generateParagraphs()}</div>
        </div>
        <img
          src="/photos/hotel/Hoteldelaplage-Houlgate.webp"
          alt="Façade de l'Hôtel de la plage à Houlgate"
          className="w-1/2 object-cover"
        />
        <div className="absolute bottom-5 left-1/2 flex w-full -translate-x-1/2 transform justify-center">
          <BookingForm className="w-fit" />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
