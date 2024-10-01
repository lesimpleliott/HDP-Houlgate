import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LogoHDP from "../components/LogoHDP";
import { i18nParagraphs } from "../utils/i18nParagraphs";
import BookingForm from "./BookingForm/BookingForm";

const HeroBanner = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Taille du breakpoint tailwind :md
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Element commun à la version mobile et desktop
  const titleContent = (
    <h1 className="font-title text-center text-5xl font-medium text-white md:text-left md:text-primary-500">
      <span className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-end md:justify-start">
        <LogoHDP className="w-16 md:w-12" />
        <p>Houlgate</p>
      </span>
      <p className="mr-1 inline">{t("home_title")}</p>
      <i className="fa-solid fa-star inline align-super text-xs"></i>
      <i className="fa-solid fa-star inline align-super text-xs"></i>
    </h1>
  );

  // PARAGRAPHE
  const textContent = i18nParagraphs("home_paragraph");

  // IMAGE
  const imageContent = {
    src: "/photos/hotel/Hoteldelaplage-Houlgate-2.webp",
    alt: "Façade de l'Hôtel de la plage à Houlgate",
  };

  return (
    <>
      {/* MOBILE */}
      {isMobile && (
        <section
          id="heroBanner-mobile"
          className={`flex flex-col items-center gap-4 pt-16 md:hidden ${className}`}
        >
          {/* Textes */}
          {titleContent}
          <div className="order-3 flex flex-col gap-3 px-4 md:px-20">
            {textContent}
          </div>

          {/* Image */}
          <img
            src={imageContent.src}
            alt={imageContent.alt}
            className="absolute top-16 -z-10 h-[500px] w-full object-cover object-[30%] brightness-50"
          />

          {/* Formulaire de réservation */}
          <BookingForm className="order-2" />
        </section>
      )}

      {/* DESKTOP */}
      {!isMobile && (
        <section
          id="heroBanner-desktop"
          className={`max-w-custom flex w-full items-center justify-center`}
        >
          <div
            className={`relative hidden flex-wrap overflow-hidden rounded-bl-[75px] rounded-tr-[75px] bg-white shadow-lg md:flex ${className}`}
          >
            {/* Conteneur de texte */}
            <div className="flex w-1/2 flex-col gap-4 px-10 pb-36 pt-10">
              {titleContent}
              <div className="flex flex-col gap-2">{textContent}</div>
            </div>

            {/* Image */}
            <img
              src={imageContent.src}
              alt={imageContent.alt}
              className="w-1/2 object-cover object-[30%]"
            />

            {/* Formulaire de réservation */}
            <div className="absolute bottom-5 left-1/2 flex w-full -translate-x-1/2 transform justify-center">
              <BookingForm className="w-fit" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroBanner;
