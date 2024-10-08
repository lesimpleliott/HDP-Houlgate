import { useTranslation } from "react-i18next";
import roomsData from "../assets/data/rooms.json";
import LogoHDP from "../components/LogoHDP";
import SectionHDP from "../components/SectionHDP/SectionHDP";
import SectionTitle from "../components/SectionHDP/SectionTitle";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoint";
import BookBanner from "../layouts/BookBanner";
import RoomsFullView from "../layouts/Rooms/RoomsFullView";
import { RoomTypes } from "../types/RoomTypes";
import { i18nParagraphs } from "../utils/i18nParagraphs";
const rooms: RoomTypes[] = roomsData as RoomTypes[];

const Rooms = () => {
  const { t } = useTranslation();
  const isSmScreen = useTailwindBreakpoint("sm");

  return (
    <main className="my-16">
      {/* BANNER */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/photos/rooms/roomsCover.webp"
          alt=""
          className="h-80 w-full object-cover brightness-50 filter"
        />
        <LogoHDP
          type={isSmScreen ? "horizontal" : "icon"}
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 fill-white/5"
        />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
          {t("rooms.title")}
        </h1>
      </section>

      {/* ROOMS */}
      <SectionHDP className="!px-0 flex flex-col gap-6">
        <div className="flex flex-col gap-4 px-4 md:px-10">
          <SectionTitle title={t("rooms.title")} />
          {i18nParagraphs("rooms.paragraph")}
        </div>

        <div>
          {rooms.map((room, index) => (
            <RoomsFullView key={index} index={index} room={room} />
          ))}
        </div>
      </SectionHDP>

      {/* RESERVATION */}
      <BookBanner />
    </main>
  );
};

export default Rooms;
