import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BookingFormElement from "./BookingFormElement";

const getTodayDate = () => {
  const today = new Date();
  const todayDate = today.toISOString().split("T")[0];
  return todayDate;
};

const getNextDay = (dateString: string): string => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  return date.toISOString().split("T")[0];
};

const getNightCount = (checkin: string, checkout: string): number => {
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
  const nightCount = timeDiff / (1000 * 3600 * 24);
  return nightCount;
};

const BookingForm = () => {
  const { t } = useTranslation();
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
    setCheckout(newCheckoutDate.toISOString().split("T")[0]);
  };

  return (
    <form className="bg-background/35 m-4 rounded-3xl p-2 backdrop-blur md:rounded-full">
      <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-2xl leading-5 md:flex md:gap-0 md:divide-x md:rounded-full">
        <BookingFormElement
          type="input"
          icon={{ src: "/icons/checkin.svg", alt: "Checkin icon" }}
          label={t("checkin")}
          inputProps={{
            id: "checkin",
            type: "date",
            min: getTodayDate(),
            value: checkin,
            onChange: handleCheckinChange,
          }}
        />

        <BookingFormElement
          type="input"
          icon={{ src: "/icons/checkout.svg", alt: "Checkout icon" }}
          label={t("checkout")}
          inputProps={{
            id: "checkout",
            type: "date",
            min: checkin,
            value: checkout,
            onChange: handleCheckoutChange,
          }}
        />

        <BookingFormElement
          type="input"
          icon={{ src: "/icons/occupation.svg", alt: "Occupation icon" }}
          label={t("occupation")}
          inputProps={{
            id: "occupation",
            type: "number",
            value: occupation,
            min: 1,
            onChange: (e) => setOccupation(parseInt(e.target.value)),
          }}
        />

        <BookingFormElement
          type="button"
          onClick={(e) => {
            e.preventDefault();
            console.log(
              "Booking form submitted:" +
                JSON.stringify({ checkin, checkout, occupation }),
            );
          }}
          icon={{ src: "/icons/search.svg", alt: "Search icon" }}
          price={75}
          nightCount={nightCount}
        />
      </div>
    </form>
  );
};

export default BookingForm;
