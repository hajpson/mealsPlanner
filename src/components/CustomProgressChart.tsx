import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

import { CustomText } from "./CustomText";
import { CustomProgressChartProps } from "../types/props/CustomProgressChartProps";
import { COLORS } from "../utils/constants";

const customProgressChartStyle = StyleSheet.create({
  centerTextWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryText: {
    fontFamily: "Lexend",
  },
});

export const CustomProgressChart = ({
  currentValue,
  maxValue,
}: CustomProgressChartProps) => {
  const progressValue = currentValue / maxValue;
  const percentValue = Math.round(progressValue * 100);
  const isOverLimit = progressValue > 1;

  return (
    <View>
      <Progress.Circle
        borderWidth={3}
        size={100}
        color={isOverLimit ? COLORS.ERROR : COLORS.PRIMARY}
        progress={isOverLimit ? progressValue - 1 : progressValue}
        unfilledColor={isOverLimit ? COLORS.PRIMARY : COLORS.LIGHT}
        borderColor={COLORS.DARK}
        thickness={8}
        strokeCap="round"
        textStyle={{ fontFamily: "Lexend" }}
      />

      <View style={customProgressChartStyle.centerTextWrapper}>
        <CustomText style={customProgressChartStyle.secondaryText}>
          {percentValue}%
        </CustomText>
      </View>
    </View>
  );
};
