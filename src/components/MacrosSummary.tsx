import { StyleSheet, View } from "react-native";

import { MacroItem } from "./MacroItem";
import { MacrosSummaryProps } from "../types/props/MacrosSummaryProps";

const macrosSummaryStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export const MacrosSummary = ({
  carbs,
  proteins,
  fats,
}: MacrosSummaryProps) => {
  return (
    <View style={macrosSummaryStyles.container}>
      <MacroItem title="Carbs" amount={carbs} />
      <MacroItem title="Proteins" amount={proteins} />
      <MacroItem title="Fats" amount={fats} />
    </View>
  );
};
