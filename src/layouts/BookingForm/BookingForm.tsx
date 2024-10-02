import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getDay,
  getMonth,
  getNextDay,
  getNightCount,
  getTodayDate,
  getYear,
} from "../../utils/dates";
import BookingFormElement from "./BookingFormElement";

const BookingForm = ({ className }: { className?: string }) => {
  const { t, i18n } = useTranslation();
  const [checkin, setCheckin] = useState(getTodayDate());
  const [checkout, setCheckout] = useState(getNextDay(checkin));
  const [checkoutManuallyChanged, setCheckoutManuallyChanged] = useState(false);
  const [occupation, setOccupation] = useState(2);
  const [nightCount, setNightCount] = useState(
    getNightCount(checkin, checkout),
  );

  // Mettre à jour le checkout lorsque le checkin change
  useEffect(() => {
    if (!checkoutManuallyChanged) {
      setCheckout(getNextDay(checkin));
    }
  }, [checkin, checkoutManuallyChanged]);

  // Mettre à jour le checkout manuellement changé
  useEffect(() => {
    setNightCount(getNightCount(checkin, checkout));
  }, [checkin, checkout]);

  // Mettre à jour le nombre de nuits lorsque le checkout change
  const handleCheckoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckoutDate = e.target.value;
    if (new Date(newCheckoutDate) < new Date(checkin)) {
      setCheckout(checkin); // Ajuste le checkout au checkin si la nouvelle date est antérieure
    } else {
      setCheckout(newCheckoutDate);
    }
    setCheckoutManuallyChanged(true);
  };

  // Mettre à jour le checkout lorsque le checkin change
  const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckinDate = e.target.value;
    setCheckin(newCheckinDate);

    // Calcule le nouveau checkout basé sur le nombre de nuits
    const newCheckoutDate = new Date(newCheckinDate);
    newCheckoutDate.setDate(newCheckoutDate.getDate() + nightCount);
    setCheckout(newCheckoutDate.toISOString().split("bookingForm.T")[0]);
  };

  const buildUrl = () => {
    const url = new URL("https://hotel.reservit.com/reservit/reserhotel.php");
    url.searchParams.append("lang", i18n.language); // Langue
    url.searchParams.append("hotelid", "237827"); // ID de l'hôtel
    url.searchParams.append("fday", getDay(checkin)); // Checkin - Jour
    url.searchParams.append("fmonth", getMonth(checkin)); // Checkin - Mois
    url.searchParams.append("fyear", getYear(checkin)); // Checkin - Année
    url.searchParams.append("tday", getDay(checkout)); // Checkout - Jour
    url.searchParams.append("tmonth", getMonth(checkout)); // Checkout - Mois
    url.searchParams.append("tyear", getYear(checkout)); // Checkout - Année
    url.searchParams.append("nbadt", occupation.toString()); // Adultes
    // Enfant(s) et code promo possible : voir documentation Reservit
    return url.toString();
  };

  return (
    <form
      className={`${className} m-4 rounded-3xl bg-white/30 p-2 shadow-lg backdrop-blur md:rounded-full`}
    >
      <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-2xl leading-5 md:flex md:gap-0 md:divide-x md:rounded-full">
        <BookingFormElement
          className="md:pl-8"
          type="input"
          icon={{ src: "/icons/checkin.svg", alt: "Checkin icon" }}
          label={t("bookingForm.checkin")}
          inputProps={{
            id: "checkin",
            type: "date",
            min: getTodayDate(),
            value: checkin,
            onChange: handleCheckinChange,
            className: "max-w-32",
          }}
        />

        <BookingFormElement
          type="input"
          icon={{ src: "/icons/checkout.svg", alt: "Checkout icon" }}
          label={t("bookingForm.checkout")}
          inputProps={{
            id: "checkout",
            type: "date",
            min: checkin,
            value: checkout,
            onChange: handleCheckoutChange,
            className: "max-w-32",
          }}
        />

        <BookingFormElement
          type="input"
          icon={{ src: "/icons/users.svg", alt: "Guests icon" }}
          label={t("bookingForm.occupation")}
          inputProps={{
            id: "occupation",
            type: "number",
            value: occupation,
            min: 1,
            onChange: (e) => setOccupation(parseInt(e.target.value)),
            className: "max-w-24",
          }}
        />

        <BookingFormElement
          className="md:pr-8"
          type="link"
          href={buildUrl()}
          icon={{ src: "/icons/search.svg", alt: "Search icon" }}
          price={666}
          nightCount={nightCount}
        />
      </div>
    </form>
  );
};

export default BookingForm;
