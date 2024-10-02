import { useTranslation } from "react-i18next";
import BookingForm from "./BookingForm/BookingForm";

const BookBanner = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <section
      className={`bg-primary-500 flex w-full flex-col items-center justify-center py-6 ${className}`}
    >
      <h2 className="px-10 text-center text-2xl font-semibold text-white">
        {t("bookBanner.title")}
      </h2>
      <BookingForm />
    </section>
  );
};

export default BookBanner;
