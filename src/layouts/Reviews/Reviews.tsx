import { useTranslation } from "react-i18next";
import CollapsedSection from "../../components/CollapsedSection";
import SectionTitle from "../../components/SectionHDP/SectionTitle";
import { i18nParagraphs } from "../../utils/i18nParagraphs";
import ReviewsCards from "./ReviewsCards";

const Reviews = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <section className={`w-full space-y-4 py-6 ${className} `}>
      {/* INTRODUCTION */}
      <div className="max-w-custom flex flex-col gap-4 px-4">
        <SectionTitle title={t("reviews.title")} />
        {i18nParagraphs("reviews.paragraph")}
      </div>

      {/* CARDS AVIS */}
      <CollapsedSection minHeight="400px">
        <ReviewsCards />
      </CollapsedSection>
    </section>
  );
};

export default Reviews;
