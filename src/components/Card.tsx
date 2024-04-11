import { LinearGradient } from "expo-linear-gradient";
import React, { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

import { CardProps } from "../types/CardProps";
import { COLORS } from "../utils/constants";

const cardStyles = StyleSheet.create({
  cardContainer: {
    padding: 12,
    borderRadius: 24,
  },
});

export const Card: FC<PropsWithChildren<CardProps>> = ({ children, style }) => {
  return (
    <View>
      <LinearGradient
        colors={[COLORS.LIGHT, COLORS.MARBLE]}
        locations={[0.3, 1]}
        style={[cardStyles.cardContainer, style]}
      >
        {children}
      </LinearGradient>
    </View>
  );
};
