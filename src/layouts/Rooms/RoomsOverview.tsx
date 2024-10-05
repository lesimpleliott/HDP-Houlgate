import { useState } from "react";
import { useTranslation } from "react-i18next";
import roomsData from "../../assets/data/rooms.json";
import CtaButton from "../../components/CtaButton";
import SectionHDP from "../../components/SectionHDP/SectionHDP";
import SectionTitle from "../../components/SectionHDP/SectionTitle";
import useTailwindBreakpoint from "../../hooks/useTailwindBreakpoint";
import CompactRoomCard from "./CompactRoomCard";

const RoomsOverview = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  // Etat permettant de savoir si on affiche tous les chambres ou non
  const [showAllRooms, setShowAllRooms] = useState(false);
  // On récupère la taille de l'écran
  const sm = useTailwindBreakpoint("sm");
  const lg = useTailwindBreakpoint("lg");
  // Détermine le nombre de chambres à afficher en fonction de la taille de l'écran
  const roomsToShow = showAllRooms
    ? roomsData
    : lg
      ? roomsData.slice(0, 3) // écran supérieur à lg (1024px) : on affiche 3 chambres
      : sm
        ? roomsData.slice(0, 4) // écran supérieur à sm (640px) : on affiche 4 chambres
        : roomsData.slice(0, 3); // écran inférieur à sm (640px) : on affiche 3 chambres

  return (
    <SectionHDP className={`${className} flex flex-col gap-4`}>
      <section className="flex justify-between">
        <SectionTitle title={t("rooms.title")} />
        <CtaButton type="Navlink" to="/rooms">
          {t("common.seeAll")}
        </CtaButton>
      </section>

      <section className="grid grid-rows-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roomsToShow.map((room) => (
          <CompactRoomCard key={room.id} room={room} />
        ))}
      </section>

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
