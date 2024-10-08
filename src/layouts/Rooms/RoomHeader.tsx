import { useTranslation } from "react-i18next";
import { RoomTypes } from "../../types/RoomTypes";

type RoomHeaderProps = {
  room: RoomTypes;
  className?: string;
};

const RoomHeader = ({ room, className }: RoomHeaderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <header className={`w-full flex flex-col gap-1 ${className}`}>
      {/* TITRE + DESCRIPTION */}
      <section>
        <h3 className="text-xl font-bold">{room.title[i18n.language]}</h3>
        {/* <p className="mb-2 text-sm italic text-gray-500">
          {room.description[i18n.language]}
        </p> */}
      </section>

      {/* TARIFS ET PERSONNES */}
      <section className="flex items-center justify-start divide-x gap-4">
        {/* TARIFS */}
        <div className="">
          <p className="text-xs font-medium uppercase tracking-wide">
            {t("common.from")}
            {i18n.language === "fr" ? " :" : ":"}
          </p>
          <p className="text-3xl font-extrabold leading-none">
            {room.infos.price.min}€
            <span className="text-base font-medium">
              {" "}
              / {t("common.night_one")}
            </span>
          </p>
        </div>
        {/* PERSONNES */}
        <div className="flex h-full items-end gap-1 pl-4">
          <img
            src="/icons/users.svg"
            alt={t("common.icon_users")}
            className="w-8 pb-1"
          />
          <p className="text-lg font-medium">
            <span className="text-xs">x</span>
            {room.infos.persons}
          </p>
        </div>
      </section>
    </header>
  );
};

export default RoomHeader;
