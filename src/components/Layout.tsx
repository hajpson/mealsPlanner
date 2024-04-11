import { FC, PropsWithChildren } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LayoutProps } from "../types/LayoutProps";
import { uniStyles } from "../utils/styles";

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
        uniStyles.mainWrapper,
      ]}
    >
      {children}
    </View>
  );
};
