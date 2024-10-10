import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import roomsData from "../../assets/data/rooms.json";
import CtaButton from "../../components/CtaButton";
import SectionHDP from "../../components/SectionHDP/SectionHDP";
import SectionTitle from "../../components/SectionHDP/SectionTitle";
import useTailwindBreakpoint from "../../hooks/useTailwindBreakpoint";
import { RoomTypes } from "../../types/RoomTypes";
import RoomHeader from "./RoomHeader";

const RoomsOverview = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  // Etat permettant de savoir si on affiche tous les chambres ou non
  const [showAllRooms, setShowAllRooms] = useState(false);
  // On récupère la taille de l'écran
  const sm = useTailwindBreakpoint("sm");
  const lg = useTailwindBreakpoint("lg");
  // Détermine le nombre de chambres à afficher en fonction de la taille de l'écran
  const roomsToShow: RoomTypes[] = (
    showAllRooms
      ? roomsData
      : lg
        ? // écran supérieur à lg (1024px) : on affiche 3 cards
          roomsData.slice(0, 3)
        : sm
          ? // écran supérieur à sm (640px) : on affiche 4 cards
            roomsData.slice(0, 4)
          : // écran inférieur à sm (640px) : on affiche 3 cards
            roomsData.slice(0, 3)
  ) as RoomTypes[];

  return (
    <SectionHDP className={`${className} flex flex-col gap-4`}>
      {/* TITRE + CTA */}
      <section className="flex justify-between">
        <SectionTitle title={t("rooms.title")} />
        <CtaButton type="Navlink" to="/rooms">
          {t("common.seeAll")}
        </CtaButton>
      </section>

      {/* CARDS */}
      <section className="grid grid-rows-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roomsToShow.map((room, index) => (
          <article key={index} className="card flex flex-col p-3.5 ">
            {/* IMAGE */}
            <img
              src={room.images[0]}
              className="max-h-52 w-full rounded-t-lg object-cover"
            />

            {/* TITLE + INFOS */}
            <RoomHeader room={room} />

            {/* <!-- BOUTON --> */}
            <NavLink
              to={`/rooms#${room.id}`}
              className="mt-2.5 rounded-md bg-gray-800 p-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
            >
              {t("common.moreInfo")}
            </NavLink>
          </article>
        ))}
      </section>

      {/* BOUTON 'VOIR PLUS' */}
      <button
        onClick={() => setShowAllRooms(!showAllRooms)}
        className="italic text-gray-400"
      >
        {showAllRooms ? t("common.showLess") : t("common.showMore")}
        <i
          className={`fa-solid fa-chevron-down ml-2 transition-transform ease-in-out ${showAllRooms ? "rotate-180" : "rotate-0"}`}
        ></i>
      </button>
    </SectionHDP>
  );
};

export default RoomsOverview;
