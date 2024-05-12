import { calculateCalories } from "./calculateCalories";
import { Meal } from "../types/Meal";

export const calculateIntake = (items: Meal[]) => {
  let intake = 0;

  items.forEach((item) => {
    intake += calculateCalories(
      item.carbsAmount,
      item.proteinsAmount,
      item.fatsAmount,
    );
  });

  console.log(intake);

  return intake;
};
