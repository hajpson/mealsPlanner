import { MACRO } from "../types/Macro";
import { Meal } from "../types/Meal";

export const getMacro = (items: Meal[], macroType: MACRO) => {
  const wantedMacro = items.reduce((acc, curr) => {
    let macro = 0;

    switch (macroType) {
      case MACRO.CARBS:
        macro = curr.carbsAmount;
        break;
      case MACRO.PROTEINS:
        macro = curr.proteinsAmount;
        break;
      default:
        macro = curr.fatsAmount;
        break;
    }

    return acc + macro;
  }, 0);

  return wantedMacro;
};

export const getAllMacros = (items: Meal[]) => {
  const carbs = getMacro(items, MACRO.CARBS);
  const proteins = getMacro(items, MACRO.PROTEINS);
  const fats = getMacro(items, MACRO.FATS);

  return {
    carbs: getMacro(items, MACRO.CARBS),
    proteins: getMacro(items, MACRO.PROTEINS),
    fats: getMacro(items, MACRO.FATS),
    intake: Math.round(carbs * 4 + proteins * 4 + fats * 9),
  };
};
