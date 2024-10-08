import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel";
import CtaButton from "../../components/CtaButton";
import { RoomTypes } from "../../types/RoomTypes";
import DetailList from "./DetailList";
import RoomHeader from "./RoomHeader";

type RoomsFullViewProps = {
  room: RoomTypes;
  index: number;
};

const RoomsFullView = ({ room, index }: RoomsFullViewProps) => {
  const { t } = useTranslation();
  const even = (num: number) => num % 2 === 0;

  return (
    <article
      key={index}
      className={`flex flex-col items-center md:items-stretch ${even(index) ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <Carousel
        images={room.images}
        className="h-80 w-full bg-primary-100 object-cover md:h-96 md:w-1/2"
      />

      <section className={`w-full px-10 py-6 md:w-1/2`}>
        <div className="mx-auto flex h-full w-full max-w-[500px] flex-col items-center gap-4">
          {/* TITLE + INFOS */}
          <RoomHeader room={room} />
          {/* LIST */}
          <DetailList infos={room.infos} />
          {/* CTA */}
          <CtaButton
            type="link"
            target="_blank"
            href={`https://hotel.reservit.com/reservit/reserhotel.php?action=resa&hotelid=237827&catcode=${room.reservitID}`}
            className="my-3 w-full max-w-[400px] md:my-0"
          >
            {t("rooms.bookThisRoom")}
          </CtaButton>
        </div>
      </section>
    </article>
  );
};

export default RoomsFullView;
