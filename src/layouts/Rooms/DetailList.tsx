// !!! Attention !!!
// Aucun "alt" n'est présent sur les images.
// Pensez à ajouter un attribut "alt" pour chaque image en fonction de son contenu.

import { useTranslation } from "react-i18next";
import { RoomInfosTypes } from "../../types/RoomTypes";

const DetailList = ({ infos }: { infos: RoomInfosTypes }) => {
  const { t, i18n } = useTranslation();

  const liClass = "flex gap-2 items-center";
  const iconClass = "w-5";
  const textClass = "text-sm";

  return (
    <section className="w-full flex-1">
      <ul className="grid items-center gap-x-3 gap-y-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {/* LITS */}
        <li className={liClass}>
          <img src="/icons/bed.svg" className={iconClass} />
          <p className={textClass}>{infos.bed[i18n.language]}</p>
        </li>
        {/* SUPERFICIE */}
        <li className={liClass}>
          <img src="/icons/area.svg" className={iconClass} />
          <p className={textClass}>
            {typeof infos.area === "number"
              ? `${t("rooms.area")} ${infos.area} m²`
              : "min" in infos.area
                ? `${t("rooms.area")} ${infos.area.min} - ${infos.area.max} m²`
                : `${t("rooms.area")} ~${infos.area.approx} m²`}
          </p>
        </li>
        {/* VUE */}
        {infos.roomType === "seaview" && (
          <li className={liClass}>
            <img src="/icons/view.svg" className={iconClass} />
            <p className={textClass}>{t(`rooms.${infos.roomType}`)}</p>
          </li>
        )}
        {/* Mini-réfrigerateur */}
        {infos.fridge && (
          <li className={liClass}>
            <img src="/icons/fridge.svg" className={iconClass} />
            <p className={textClass}>{t("rooms.fridge")}</p>
          </li>
        )}
        {/* TV */}
        {infos.tv && (
          <li className={liClass}>
            <img src="/icons/tv.svg" className={iconClass} />
            <p className={textClass}>{t("rooms.tv")}</p>
          </li>
        )}
        {/* WIFI */}
        {infos.wifi && (
          <li className={liClass}>
            <img src="/icons/wifi.svg" className={iconClass} />
            <p className={textClass}>{t("rooms.wifi")}</p>
          </li>
        )}
        {/* HANDICAP */}
        {infos.handicap && (
          <li className={liClass}>
            <img src="/icons/handicap.svg" className={iconClass} />
            <p className={textClass}>{t("rooms.handicap")}</p>
          </li>
        )}
      </ul>
    </section>
  );
};

export default DetailList;
