import roomsData from "../assets/data/rooms.json";
import SectionHDP from "../components/SectionHDP/SectionHDP";
import SectionTitle from "../components/SectionHDP/SectionTitle";
import { RoomTypes } from "../types/RoomTypes";

const Prices = () => {
  const rooms: RoomTypes[] = roomsData as RoomTypes[];
  const odd = (index: number) => index % 2 !== 0;

  const lineClasses = (index: number) =>
    `border border-primary-500 ${odd(index) ? "bg-primary-100" : ""}`;
  const cellClasses = "text-center";

  return (
    <main className="my-16">
      <SectionHDP className="flex flex-col gap-6 !px-0">
        <div className="flex flex-col gap-4 px-4 md:px-10">
          <SectionTitle title="Tarifs" />
        </div>

        <table>
          {/* En-tête */}
          <thead>
            <tr className="border border-primary-500 bg-primary-300">
              <th>Chambre</th>
              <th>Tarif TTC/jour**</th>
              <th>Nombre de personne</th>
            </tr>
          </thead>

          {/* Corps */}
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index} className={`${lineClasses(index)}`}>
                <td className={cellClasses}>{room.title.fr}</td>
                <td className={cellClasses}>
                  de {room.infos.price.min}€ à {room.infos.price.max}€
                </td>
                <td className={cellClasses}>
                  1 à {room.infos.persons} personnes
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionHDP>
    </main>
  );
};

export default Prices;
