import BookBanner from "../layouts/BookBanner";
import Facilities from "../layouts/Facilities/Facilities";
import HeroBanner from "../layouts/HeroBanner";
import RoomsCompact from "../layouts/Rooms/RoomsOverview";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <HeroBanner className="md:mt-4" />
      <Facilities />
      <RoomsCompact />
      <BookBanner />
    </main>
  );
};

export default Home;
