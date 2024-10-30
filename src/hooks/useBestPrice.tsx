import { useEffect, useState } from "react";
import { BestPriceResponse, UseBestPriceParams } from "../types/BestPrice";

const useBestPrice = ({ fromDate, toDate }: UseBestPriceParams) => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const hotelId = import.meta.env.VITE_RESERVIT_HOTELID; // ID de l'hôtel
  const custId = import.meta.env.VITE_RESERVIT_CUSTID; // ID de l'hôtel
  const partidDistrib = 83; // ID du distributeur Booking.com

  useEffect(() => {
    const fetchBestPrice = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = new URL(
          `https://secure.reservit.com/api/rs/bestprice/${custId}/${hotelId}`,
        );
        url.searchParams.append("fromdate", fromDate);
        url.searchParams.append("todate", toDate);
        if (partidDistrib) {
          url.searchParams.append("partidDistrib", partidDistrib.toString());
        }

        const response = await fetch(url.toString());
        const data: BestPriceResponse = await response.json();

        if (data.bestPrice_unFormatted !== -1) {
          setPrice(data.bestPrice_unFormatted);
        } else {
          setPrice(null);
          setError("Indisponible");
        }
      } catch (err) {
        setError("Erreur");
      } finally {
        setLoading(false);
      }
    };

    // Appelle la fonction pour récupérer le tarif
    fetchBestPrice();
  }, [fromDate, toDate, partidDistrib, hotelId, custId]);

  return { price, loading, error };
};

export default useBestPrice;
