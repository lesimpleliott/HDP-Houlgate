import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import roomsData from "../../assets/data/rooms.json";
import CollapsedSection from "../../components/CollapsedSection";
import CtaButton from "../../components/CtaButton";
import SectionTitle from "../../components/SectionHDP/SectionTitle";
import useTailwindBreakpoints from "../../hooks/useTailwindBreakpoint";
import { RoomTypes } from "../../types/RoomTypes";
import RoomHeader from "./RoomHeader";

const RoomsOverview = ({ className }: { className?: string }) => {
  const typedRoomsData: RoomTypes[] = roomsData as RoomTypes[];
  const { t } = useTranslation();
  const { sm, md, lg } = useTailwindBreakpoints();

  // Définir la variable en fonction des breakpoints
  const displayRows = lg ? 1 : md ? 2 : sm ? 2 : 3;
  // Taille des cartes
  const cardHeight = 370; // Hauteur des cartes (en px)
  const gap = 16; // Espace entre les cartes (gap-4 = 1rem = 16px)
  const lineHeight = displayRows * (cardHeight + gap) + 40; // 40px pour le bouton 'voir plus'

  return (
    <section className={`w-full space-y-4 py-6 ${className}`}>
      {/* INTRODUCTION */}
      <section className="max-w-custom flex justify-between">
        <SectionTitle title={t("rooms.title")} />
        <CtaButton type="Navlink" to="/rooms">
          {t("common.seeAll")}
        </CtaButton>
      </section>

      {/* CHAMBRES */}
      <CollapsedSection minHeight={`${lineHeight}px`} button="flat">
        <section className="grid grid-rows-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {typedRoomsData.map((room, index) => (
            <article
              key={index}
              className="card flex flex-col p-3.5"
              style={{ height: `${cardHeight}px` }}
            >
              {/* IMAGE */}
              <img
                src={room.images[0]}
                className="h-52 w-full rounded-t-lg object-cover"
              />

              {/* TITLE + INFOS */}
              <RoomHeader
                room={room}
                className="flex flex-1 justify-center px-2"
              />

              {/*  BOUTON */}
              <NavLink
                to={`/rooms#${room.id}`}
                className="rounded-md bg-gray-800 p-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
              >
                {t("common.moreInfo")}
              </NavLink>
            </article>
          ))}
        </section>
      </CollapsedSection>
    </section>
  );
};

export default RoomsOverview;
