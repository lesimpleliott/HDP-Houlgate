import { useTranslation } from "react-i18next";
import CtaButton from "../../components/CtaButton";
import useStoreMenu from "../../stores/menu.store";
import { capitalize } from "../../utils/capitalize";
import { toggleLanguage } from "../../utils/i18n";

const MenuSettings = ({ className }: { className?: string }) => {
  const { t, i18n } = useTranslation();
  const { setMenuIsOpen } = useStoreMenu();

  return (
    <div className={`${className}`}>
      <CtaButton
        type="link"
        // RESERVIT / Accès général
        href={`https://hotel.reservit.com/reservit/reserhotel.php?lang=${i18n.language}&hotelid=237827`} 
        // RESERVIT / Accès par un calendrier des tarifs et disponibilités
        // to={`https://hotel.reservit.com/reservit/reserhotel.php?lang=${i18n.language}&action=tabavail&hotelid=237827`}
        target="_blank"
        onClick={() => setMenuIsOpen(false)}
      >
        {t("navbar_bookBtn")}
      </CtaButton>
      <button
        onClick={() => {
          // setMenuIsOpen(false);
          toggleLanguage();
        }}
        className="flex items-center gap-2"
      >
        <img
          src={`/flags/${i18n.language}.svg`}
          alt={t("language")}
          className="h-9 min-w-9 cursor-pointer rounded-full object-cover shadow-md"
        />
        <p className="min-w-20 text-left md:hidden">
          {capitalize(t("language"))}
        </p>
      </button>
    </div>
  );
};

export default MenuSettings;
