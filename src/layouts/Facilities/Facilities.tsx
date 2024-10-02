import { useTranslation } from "react-i18next";
import SectionHDP from "../../components/SectionHDP/SectionHDP";
import SectionTitle from "../../components/SectionHDP/SectionTitle";
import { i18nParagraphs } from "../../utils/i18nParagraphs";
import FacilityCard from "./FacilityCard";
import { facilitiesData } from "./facilitiesData";

type FacilitiesProps = {
  icon: string;
  title: string;
  description: string;
};

const Facilities = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <SectionHDP className={`${className} flex flex-col gap-6`} reversedColor>
      <div className="flex flex-col gap-4 text-white">
        <SectionTitle title={t("facilities.title")} />
        {i18nParagraphs("facilities.paragraph")}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {facilitiesData.map((facility: FacilitiesProps, index: number) => (
          <FacilityCard
            key={index}
            icon={facility.icon}
            title={t(facility.title)}
            description={t(facility.description)}
          />
        ))}
      </div>
    </SectionHDP>
  );
};

export default Facilities;
