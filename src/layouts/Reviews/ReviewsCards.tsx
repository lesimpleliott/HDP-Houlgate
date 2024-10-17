import { useTranslation } from "react-i18next";
import dataReviews from "../../assets/data/reviews.json";

const ReviewsCards = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();

  const formattedRating = (rating: number) => {
    return new Intl.NumberFormat(i18n.language, {
      minimumFractionDigits: 0, // minimum après la virgule
      maximumFractionDigits: 0, // maximum après la virgule
    }).format(rating);
  };

  const dateFormated = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: undefined,
    };
    return new Date(date).toLocaleDateString(i18n.language, options);
  };

  return (
    <div
      className={`columns-1 space-y-4 ${className} xsm:columns-2 md:columns-3 lg:columns-4`}
    >
      {dataReviews.map((review, index) => {
        return (
          <article key={index} className="card relative break-inside-avoid p-4">
            {/* TEXTE */}
            <header className="w-full">
              <div className="flex justify-between">
                <h3 className="overflow-hidden text-ellipsis text-nowrap text-xl font-medium">
                  {review.authorAttribution.displayName}
                </h3>
                <span className="ml-4 text-xl font-medium text-primary-500">
                  {formattedRating(review.rating)}
                  <span className="text-xs font-light">/5</span>
                </span>
              </div>
              <div className="flex items-center justify-between text-sm italic text-gray-400">
                <p>{dateFormated(review.publishTime)}</p>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className={`fa-solid fa-star ${
                        starIndex < review.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
            </header>

            {/* COMMENTAIRE */}
            <p className="mt-2 text-gray-700">{review.originalText.text}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ReviewsCards;
