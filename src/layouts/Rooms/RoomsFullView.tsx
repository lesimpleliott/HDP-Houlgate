import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel";
import { RoomTypes } from "../../types/RoomTypes";
import DetailList from "./DetailList";

type RoomsFullViewProps = {
  room: RoomTypes;
  index: number;
};

const RoomsFullView = ({ room, index }: RoomsFullViewProps) => {
  const { t, i18n } = useTranslation();
  const even = (num: number) => num % 2 === 0;

  return (
    <article
      key={index}
      className={`flex flex-col ${even(index) ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <Carousel
        images={room.images}
        className="h-80 w-full bg-primary-100 object-cover md:h-96 md:w-1/2"
      />

      {/* TEXTES */}
      <section className={`flex w-full flex-col gap-4 p-6 md:w-1/2`}>
        {/* Titre */}

        <header>
          <div className="flex justify-between">
            <h2 className="text-3xl font-semibold">
              {room.title[i18n.language]}
            </h2>
            <div className="flex items-center gap-1">
              <img src="/icons/users.svg" className="w-8" alt="" />
              <p className="text-lg font-medium">
                <span className="text-xs">x</span>
                {room.infos.persons}
              </p>
            </div>
          </div>
          <p className="text-gray-700">{room.description[i18n.language]}</p>
        </header>

        {/* DETAILS */}
        <DetailList infos={room.infos} />

        <div className="">
          <p className="text-xs font-medium uppercase tracking-wide">
            {t("common.from")}
            {i18n.language === "fr" ? " :" : ":"}
          </p>
          <p className="text-3xl font-extrabold">
            {room.infos.price.min}€
            <span className="text-base font-medium">
              {" /"}
              {t("common.night_one")}
            </span>
          </p>
        </div>
      </section>
    </article>
  );
};

export default RoomsFullView;
