import { NAVIGATION_SCREEN_ID, colors } from "../utils/constants";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { styles } from "../utils/styles";
import { View } from "react-native";

export const SetIconFromNavigationScreenId = ({
  screenId,
  isFocused,
}: {
  screenId: string;
  isFocused: boolean;
}) => {
  const iconSize = isFocused ? 26 : 20;
  const iconColor = isFocused ? colors.light : colors.medium;

  const mealsIcon = (
    <View>
      <MaterialCommunityIcons
        name="food-variant"
        size={iconSize}
        color={iconColor}
      />
    </View>
  );

  const productsIcon = (
    <MaterialIcons
      name="local-grocery-store"
      size={iconSize}
      color={iconColor}
    />
  );

  const settingsIcon = <Entypo name="cog" size={iconSize} color={iconColor} />;

  switch (screenId) {
    case NAVIGATION_SCREEN_ID.MEALS:
      return mealsIcon;
    case NAVIGATION_SCREEN_ID.PRODUCTS:
      return productsIcon;
    case NAVIGATION_SCREEN_ID.SETTINGS:
      return settingsIcon;
    default:
      return null;
  }
};
