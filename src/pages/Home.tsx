import BookBanner from "../layouts/BookBanner";
import Facilities from "../layouts/Facilities/Facilities";
import HeroBanner from "../layouts/HeroBanner";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <HeroBanner />
      <Facilities />
      <BookBanner />
    </main>
  );
};

export default Home;
