import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHDP from "../../components/SectionHDP/SectionHDP";
import SectionTitle from "../../components/SectionHDP/SectionTitle";
import { i18nParagraphs } from "../../utils/i18nParagraphs";
import ReviewsCards from "./ReviewsCards";

const Reviews = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <SectionHDP className={`flex flex-col gap-6 ${className} `}>
      {/* INTRODUCTION */}
      <div className="flex flex-col gap-4 px-4">
        <SectionTitle title={t("reviews.title")} />
        {i18nParagraphs("reviews.paragraph")}
      </div>

      {/* CARDS AVIS */}
      <section
        className={`${showAllReviews ? "max-h-full" : "max-h-[500px] overflow-hidden"}`}
      >
        <ReviewsCards />
      </section>

      {/* BOUTON 'VOIR PLUS' */}
      <button
        onClick={() => setShowAllReviews(!showAllReviews)}
        className={`relative z-10 bg-gradient-to-t from-background from-30% to-transparent italic text-gray-400 hover:text-primary-500 ${showAllReviews ? "mt-0 max-h-full pt-0" : "-mt-44 max-h-[500px] overflow-hidden pt-32"}`}
      >
        {showAllReviews ? t("common.showLess") : t("common.showMore")}
        <i
          className={`fa-solid fa-chevron-down ml-2 transition-transform ease-in-out ${showAllReviews ? "rotate-180" : "rotate-0"}`}
        ></i>
      </button>
    </SectionHDP>
  );
};

export default Reviews;
