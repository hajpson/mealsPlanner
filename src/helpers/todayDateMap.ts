const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const todayDateMap = () => {
  const map = new Map();
  days.forEach((day, index) => {
    map.set(index, day);
  });

  return map;
};
