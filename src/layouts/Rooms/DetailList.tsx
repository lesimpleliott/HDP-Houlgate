// !!! Attention !!!
// Aucun "alt" n'est présent sur les images.
// Pensez à ajouter un attribut "alt" pour chaque image en fonction de son contenu.

import { useTranslation } from "react-i18next";
import { RoomInfosTypes } from "../../types/RoomTypes";

const DetailList = ({ infos }: { infos: RoomInfosTypes }) => {
  const { t, i18n } = useTranslation();

  const liBaseClasses = "flex gap-2";
  const iconClasses = "w-5";
  const textClasses = "text-sm";

  return (
    <ul className="space-y-1">
      {/* LITS */}
      <li className={liBaseClasses}>
        <img src="/icons/bed.svg" className={iconClasses} />
        <p className={textClasses}>{infos.bed[i18n.language]}</p>
      </li>

      {/* SUPERFICIE */}
      <li className={liBaseClasses}>
        <img src="/icons/area.svg" className={iconClasses} />
        <p className={textClasses}>
          {typeof infos.area === "number"
            ? `${t("rooms.area")} ${infos.area} m²`
            : "min" in infos.area
              ? `${t("rooms.area")} ${infos.area.min} - ${infos.area.max} m²`
              : `${t("rooms.area")} ~${infos.area.approx} m²`}
        </p>
      </li>

      {/* VUE */}
      {infos.roomType === "seaview" && (
        <li className={liBaseClasses}>
          <img src="/icons/view.svg" className={iconClasses} />
          <p className={textClasses}>{t(`rooms.${infos.roomType}`)}</p>
        </li>
      )}

      {/* Mini-réfrigerateur */}
      {infos.fridge && (
        <li className={liBaseClasses}>
          <img src="/icons/fridge.svg" className={iconClasses} />
          <p className={textClasses}>{t("rooms.fridge")}</p>
        </li>
      )}

      {/* TV */}
      {infos.tv && (
        <li className={liBaseClasses}>
          <img src="/icons/tv.svg" className={iconClasses} />
          <p className={textClasses}>{t("rooms.tv")}</p>
        </li>
      )}

      {/* WIFI */}
      {infos.wifi && (
        <li className={liBaseClasses}>
          <img src="/icons/wifi.svg" className={iconClasses} />
          <p className={textClasses}>{t("rooms.wifi")}</p>
        </li>
      )}

      {/* HANDICAP */}
      {infos.handicap && (
        <li className={liBaseClasses}>
          <img src="/icons/handicap.svg" className={iconClasses} />
          <p className={textClasses}>{t("rooms.handicap")}</p>
        </li>
      )}
    </ul>
  );
};

export default DetailList;
