import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

import { CustomText } from "./CustomText";
import { LinearMacroBarProps } from "../types/props/LinearMacroBarProps";
import { COLORS } from "../utils/constants";

const linearMacroBarStyles = StyleSheet.create({
  container: {},
  lowerTitleWrapper: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  secondaryText: {
    fontFamily: "Lexend",
  },
  upperTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const LinearMacroBar = ({
  title,
  currentValue,
  maxValue,
}: LinearMacroBarProps) => {
  const progressValue = currentValue / maxValue;
  const percentValue = Math.round(progressValue * 100);
  const isOverLimit = progressValue > 1;

  return (
    <View style={linearMacroBarStyles.container}>
      <View style={linearMacroBarStyles.upperTitleWrapper}>
        <CustomText style={linearMacroBarStyles.secondaryText}>
          {title}
        </CustomText>

        <CustomText style={linearMacroBarStyles.secondaryText}>
          {percentValue}%
        </CustomText>
      </View>

      <Progress.Bar
        color={isOverLimit ? COLORS.ERROR : COLORS.PRIMARY}
        borderColor={COLORS.DARK}
        unfilledColor={isOverLimit ? COLORS.PRIMARY : COLORS.LIGHT}
        borderWidth={2}
        borderRadius={50}
        animated
        progress={isOverLimit ? progressValue - 1 : progressValue}
      />
      <View style={linearMacroBarStyles.lowerTitleWrapper}>
        <CustomText style={linearMacroBarStyles.secondaryText}>
          {currentValue}g / {maxValue}g
        </CustomText>
      </View>
    </View>
  );
};
