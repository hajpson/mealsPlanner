import { Card } from "./Card";
import { CustomText } from "./CustomText";
import { MacrosSummary } from "./MacrosSummary";
import { MacroCardProps } from "../types/props/MacroCardProps";

export const MacroCard = ({
  style,
  title,
  carbs,
  proteins,
  fats,
  outline = true,
}: MacroCardProps) => {
  return (
    <Card outline={outline} style={style}>
      <CustomText>{title}</CustomText>

      <MacrosSummary carbs={carbs} proteins={proteins} fats={fats} />
    </Card>
  );
};
