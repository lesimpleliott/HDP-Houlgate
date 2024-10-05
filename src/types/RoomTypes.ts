export type RoomTypes = {
  id: number;
  title: { [lang: string]: string };
  description: { [lang: string]: string };
  persons: number;
  pricePerNight: {
    min: number;
    max: number;
  };
  images: string[];
};
