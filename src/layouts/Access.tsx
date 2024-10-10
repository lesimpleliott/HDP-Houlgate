import { useTranslation } from "react-i18next";
import SectionHDP from "../components/SectionHDP/SectionHDP";
import SectionTitle from "../components/SectionHDP/SectionTitle";

const Access = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <SectionHDP reversedColor className={`space-y-6 ${className}`}>
      <SectionTitle title={t("access.title")} />
      {/* MAP GOOGLE */}
      <iframe
        className="h-[450px] w-full shadow-xl"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d776.5914555089814!2d-0.0798474!3d49.3024707!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a7ea24604b817%3A0xcf44bd8861fa4d0!2sHotel%20De%20La%20Plage!5e1!3m2!1sfr!2sfr!4v1728489164490!5m2!1sfr!2sfr"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </SectionHDP>
  );
};

export default Access;
