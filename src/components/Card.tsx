import { LinearGradient } from "expo-linear-gradient";
import React, { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

import { CardProps } from "../types/props/CardProps";
import { COLORS } from "../utils/constants";

const cardStyles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    borderRadius: 24,
  },
  outlineContainer: {
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    backgroundColor: COLORS.MARBLE,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
  },
});

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  style,
  outline = false,
}) => {
  if (outline) {
    return (
      <View
        style={[cardStyles.outlineContainer, cardStyles.cardContainer, style]}
      >
        {children}
      </View>
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.LIGHT, COLORS.MARBLE]}
      locations={[0.3, 1]}
      style={[cardStyles.cardContainer, style]}
    >
      {children}
    </LinearGradient>
  );
};
