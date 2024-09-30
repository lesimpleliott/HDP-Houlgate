import BookBanner from "../layouts/BookBanner";
import HeroBanner from "../layouts/HeroBanner/HeroBanner";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <HeroBanner />
      <BookBanner />
    </main>
  );
};

export default Home;
