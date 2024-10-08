export type RoomInfosTypes = {
  roomType: "seaview" | "patio" | "standard";
  persons: number;
  price: { min: number; max: number };
  area: number | { min: number; max: number } | { approx: number };
  bed: { [lang: string]: string };
  tv?: boolean;
  wifi?: boolean;
  fridge?: boolean;
  handicap?: boolean;
};

export type RoomTypes = {
  id: number;
  reservitID: number | number[];
  title: { [lang: string]: string };
  description: { [lang: string]: string };
  images: string[];
  infos: RoomInfosTypes;
};
