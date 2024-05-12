const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const todayDateMap = () => {
  const map = new Map();
  days.forEach((day, index) => {
    map.set(index, day);
  });

  return map;
};
