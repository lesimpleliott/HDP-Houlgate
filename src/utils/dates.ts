/**
 * Obtient la date du jour en France (zone CET/CEST).
 *
 * @returns La date du jour au format ISO (YYYY-MM-DD).
 *
 * @example
 * ```typescript
 * const today = getTodayDate();
 * console.log(today); // Affiche la date du jour en France
 * ```
 */
export const getTodayDate = () => {
  const today = new Date();
  const options = { timeZone: "Europe/Paris" } as const;
  return new Intl.DateTimeFormat("fr-FR", options).format(today); // Format ISO (YYYY-MM-DD)
};

/**
 * Obtient le jour suivant à partir d'une date donnée.
 *
 * @param dateString - La date de départ au format ISO (YYYY-MM-DD).
 * @returns La date du jour suivant au format ISO (YYYY-MM-DD).
 *
 * @example
 * ```typescript
 * const nextDay = getNextDay("2024-08-16");
 * console.log(nextDay); // Affiche "2023-10-02"
 * ```
 */
export const getNextDay = (dateString: string): string => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  return date.toISOString().split("T")[0]; // Format ISO (YYYY-MM-DD)
};

/**
 * Calcule le nombre de nuits entre deux dates.
 *
 * @param checkin - La date d'arrivée au format ISO (YYYY-MM-DD).
 * @param checkout - La date de départ au format ISO (YYYY-MM-DD).
 * @returns Le nombre de nuits entre les deux dates.
 *
 * @example
 * ```typescript
 * const nights = getNightCount("2024-08-16", "2024-08-20");
 * console.log(nights); // Affiche 4
 * ```
 */
export const getNightCount = (checkin: string, checkout: string): number => {
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
  const nightCount = timeDiff / (1000 * 3600 * 24);
  return nightCount;
};

/**
 * Calcule la date minimale à laquelle une réservation peut être effectuée en fonction d'une heure limite.
 *
 * @param cutoffTime - Un objet contenant les heures et les minutes limites pour effectuer une réservation.
 * @param cutoffTime.hours - L'heure limite en heures (0-23).
 * @param cutoffTime.minutes - Les minutes limites (0-59).
 * @returns La date minimale pour effectuer une réservation au format ISO (YYYY-MM-DD).
 *
 * @example
 * ```typescript
 * const cutoff = { hours: 18, minutes: 30 };
 * const dateMin = getMinBookDate(cutoff);
 * console.log(dateMin); // Affiche la date du jour ou du lendemain en fonction de l'heure actuelle en France
 * ```
 */
export const getMinBookDate = (cutoffTime: {
  hours: number;
  minutes: number;
}) => {
  const today = new Date();

  // Récupérer l'heure et les minutes actuelles en France
  const options = {
    timeZone: "Europe/Paris",
    hour: "numeric",
    minute: "numeric",
  } as const;
  const [frenchHour, frenchMinute] = new Intl.DateTimeFormat("fr-FR", options)
    .format(today)
    .split(":")
    .map(Number);

  // Si l'heure actuelle est après l'heure limite
  if (
    frenchHour > cutoffTime.hours ||
    (frenchHour === cutoffTime.hours && frenchMinute >= cutoffTime.minutes)
  ) {
    today.setDate(today.getDate() + 1); // Passer au jour suivant
  }

  return today.toISOString().split("T")[0]; // Format ISO (YYYY-MM-DD)
};

/**
 * Obtient le jour du mois à partir d'une date donnée.
 *
 * @param date - La date au format ISO (YYYY-MM-DD).
 * @returns Le jour du mois.
 *
 * @example
 * ```typescript
 * const day = getDay("2024-08-16");
 * console.log(day); // Affiche "16"
 * ```
 */
export const getDay = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(undefined, { day: "numeric" });
};

/**
 * Obtient le mois à partir d'une date donnée.
 *
 * @param date - La date au format ISO (YYYY-MM-DD).
 * @returns Le mois.
 *
 * @example
 * ```typescript
 * const month = getMonth("2024-08-16");
 * console.log(month); // Affiche "8"
 * ```
 */
export const getMonth = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(undefined, { month: "numeric" });
};

/**
 * Obtient l'année à partir d'une date donnée.
 *
 * @param date - La date au format ISO (YYYY-MM-DD).
 * @returns L'année.
 *
 * @example
 * ```typescript
 * const year = getYear("2024-08-16");
 * console.log(year); // Affiche "2024"
 * ```
 */
export const getYear = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(undefined, { year: "numeric" });
};
