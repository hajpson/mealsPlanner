import { useSafeAreaInsets } from "react-native-safe-area-context";

export const getSafeAreaInsetsPadding = () => {
  const insets = useSafeAreaInsets();
  const safeAreaInsetsPadding = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return safeAreaInsetsPadding;
};
