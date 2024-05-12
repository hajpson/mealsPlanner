import { todayDateMap } from "./todayDateMap";

export const getToday = () => {
  return todayDateMap().get(new Date().getDay());
};
