import { useTranslation } from "react-i18next";
import roomsData from "../assets/data/rooms.json";
import LogoHDP from "../components/LogoHDP";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoint";
import BookBanner from "../layouts/BookBanner";
import RoomsFullView from "../layouts/Rooms/RoomsFullView";
import { RoomTypes } from "../types/RoomTypes";
const rooms: RoomTypes[] = roomsData as RoomTypes[];

const Rooms = () => {
  const { t } = useTranslation();
  const test = useTailwindBreakpoint("sm");

  return (
    <main className="my-16 items-center">
      {/* BANNER */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/photos/rooms/roomsCover.webp"
          alt=""
          className="h-80 w-full object-cover brightness-50 filter"
        />
        <LogoHDP
          type={test ? "horizontal" : "icon"}
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 fill-white/5"
        />
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
          {t("rooms.title")}
        </h1>
      </section>

      {/* ROOMS */}
      <section className="w-full max-w-7xl">
        {rooms.map((room, index) => (
          <RoomsFullView key={index} index={index} room={room} />
        ))}
      </section>

      {/* RESERVATION */}
      <BookBanner />
    </main>
  );
};

export default Rooms;
