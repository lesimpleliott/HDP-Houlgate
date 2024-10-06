import SectionHDP from "../components/SectionHDP/SectionHDP";

const Rooms = () => {
  return (
    <main className="my-10 test-blue">
      <SectionHDP className="test-red overflow-hidden">
        <img
          src="/photos/rooms/roomsCover.webp"
          alt=""
          className="h-96 w-full object-cover"
        />
      </SectionHDP>
    </main>
  );
};

export default Rooms;
