const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0]; // Format ISO (YYYY-MM-DD)
};

const getNextDay = (dateString: string): string => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  return date.toISOString().split("T")[0]; // Format ISO (YYYY-MM-DD)
};

const getNightCount = (checkin: string, checkout: string): number => {
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);
  const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
  const nightCount = timeDiff / (1000 * 3600 * 24);
  return nightCount;
};

const getDay = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(undefined, { day: "numeric" });
};

const getMonth = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(undefined, { month: "numeric" });
};

const getYear = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(undefined, { year: "numeric" });
};

export { getDay, getMonth, getNextDay, getNightCount, getTodayDate, getYear };
