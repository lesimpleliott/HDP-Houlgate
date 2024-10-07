import BookBanner from "../layouts/BookBanner";
import Facilities from "../layouts/Facilities/Facilities";
import HeroBanner from "../layouts/HeroBanner";
import RoomsOverview from "../layouts/Rooms/RoomsOverview";

const Home = () => {
  return (
    <main className="my-16">
      <HeroBanner className="md:mt-4" />
      <Facilities />
      <RoomsOverview />
      <BookBanner />
    </main>
  );
};

export default Home;
