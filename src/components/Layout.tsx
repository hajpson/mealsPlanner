import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LayoutProps } from "../types/props/LayoutProps";
import { COLORS } from "../utils/constants";

const layoutStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
});

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  style,
  skipBottomInset = false,
}) => {
  const {
    top: paddingTop,
    right: paddingRight,
    bottom: paddingBottom,
    left: paddingLeft,
  } = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop,
          paddingRight,
          paddingBottom: skipBottomInset ? null : paddingBottom,
          paddingLeft,
        },
        style,
        layoutStyles.mainWrapper,
      ]}
    >
      {children}
    </View>
  );
};
