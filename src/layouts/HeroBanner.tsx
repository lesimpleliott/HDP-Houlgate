import LogoHDP from "../components/LogoHDP";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoint";
import { i18nParagraphs } from "../utils/i18nParagraphs";
import BookingForm from "./BookingForm/BookingForm";

const HeroBanner = ({ className }: { className?: string }) => {
  const { xs, md } = useTailwindBreakpoint();

  // PARAGRAPHE
  const textContent = i18nParagraphs("home.paragraph");

  // IMAGE
  const imageContent = {
    src: "/photos/hotel/Hoteldelaplage-Houlgate-2.webp",
    alt: "Façade de l'Hôtel de la plage à Houlgate",
  };

  return (
    <>
      {/* MOBILE */}
      {xs && (
        <section
          id="heroBanner-mobile"
          className={`flex flex-col items-center gap-4 pt-28 md:hidden ${className}`}
        >
          {/* Textes */}
          {/* {titleContent} */}
          <h1>
            <LogoHDP
              type="horizontal"
              className="mx-auto w-full max-w-96 fill-white px-8"
            />
          </h1>

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
          <BookingForm className="order-2 mt-14" />
        </section>
      )}

      {/* DESKTOP */}
      {md && (
        <section
          id="heroBanner-desktop"
          className={`max-w-custom flex w-full items-center justify-center`}
        >
          <div
            className={`relative hidden flex-wrap overflow-hidden rounded-bl-[75px] rounded-tr-[75px] bg-white shadow-lg md:flex ${className}`}
          >
            {/* Conteneur de texte */}
            <div className="flex w-1/2 flex-col gap-6 px-10 pb-36 pt-10">
              {/* {titleContent} */}
              <h1>
                <LogoHDP
                  type="horizontal"
                  className="mx-auto w-full max-w-52 fill-primary-500"
                />
              </h1>
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
