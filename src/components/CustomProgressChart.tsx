import * as Progress from "react-native-progress";

import { CustomProgressChartProps } from "../types/CustomProgressChartProps";
import { COLORS } from "../utils/constants";

export const CustomProgressChart = ({
  progressValue,
}: CustomProgressChartProps) => {
  const progressCalculated = progressValue / 2000;

  return (
    <Progress.Circle
      borderWidth={3}
      size={100}
      color={COLORS.DARK}
      progress={progressCalculated}
      unfilledColor={COLORS.LIGHT}
      borderColor={COLORS.PRIMARY}
      thickness={8}
      showsText
      strokeCap="round"
      textStyle={{ fontFamily: "Lexend" }}
    />
  );
};
