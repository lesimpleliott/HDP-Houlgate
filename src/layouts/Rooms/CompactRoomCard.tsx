import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { RoomTypes } from "../../types/RoomTypes";

const CompactRoomCard = ({
  room,
  className,
}: {
  room: RoomTypes;
  className?: string;
}) => {
  const { t, i18n } = useTranslation();

  return (
    <article className={`card flex flex-col p-3 ${className}`}>
      {/* IMAGE */}
      <img
        src={room.images[0]}
        className="max-h-52 w-full rounded-t-lg object-cover"
      />

      {/* <!-- TITRE + DESCRIPTION --> */}
      <section className="mt-2 flex flex-1 flex-col px-1">
        <h3 className="text-xl font-bold">{room.title[i18n.language]}</h3>
        {/* <p className="text-sm mb-2 italic text-gray-500">
          {room.description[i18n.language]}
        </p> */}
      </section>

      {/* <!-- DETAILS --> */}
      <section className="my-2 flex justify-between px-1">
        <div className="">
          <p className="text-xs font-medium uppercase tracking-wide">
            {t("common.from")}
            {i18n.language === "fr" ? " :" : ":"}
          </p>
          <p className="text-3xl font-extrabold">
            {room.pricePerNight.min}€
            <span className="text-base font-medium">
              {" /"}
              {t("common.night_one")}
            </span>
          </p>
        </div>
        <div className="flex items-end gap-1">
          <img src="/icons/users.svg" className="w-8 pb-0.5" alt="" />
          <p className="text-lg font-medium">
            <span className="text-xs">x</span>
            {room.persons}
          </p>
        </div>
      </section>

      {/* <!-- BOUTON --> */}
      <NavLink
        to={`/rooms#${room.id}`}
        className="rounded-md bg-gray-800 p-[9px] text-center text-sm font-semibold text-white hover:bg-gray-900"
      >
        {t("common.moreInfo")}
      </NavLink>
    </article>
  );
};

export default CompactRoomCard;
