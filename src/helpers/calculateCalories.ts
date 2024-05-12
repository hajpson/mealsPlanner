import { MACRO_VALUES } from "../utils/constants";

export const calculateCalories = (
  carbs: number,
  proteins: number,
  fats: number,
) => {
  const carbsKcal = MACRO_VALUES.CARBS * carbs;
  const proteinsKcal = MACRO_VALUES.PROTEINS * proteins;
  const fatsKcal = MACRO_VALUES.FATS * fats;

  return carbsKcal + proteinsKcal + fatsKcal;
};
