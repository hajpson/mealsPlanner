import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { View } from "react-native";

import { NAVIGATION_SCREEN_ID, COLORS } from "../utils/constants";

export const SetIconFromNavigationScreenId = ({
  screenId,
  isFocused,
}: {
  screenId: string;
  isFocused: boolean;
}) => {
  const iconSize = isFocused ? 26 : 20;
  const iconColor = isFocused ? COLORS.PLAIN_WHITE : COLORS.LIGHT;

  const mainIcon = (
    <View>
      <MaterialCommunityIcons name="home" size={iconSize} color={iconColor} />
    </View>
  );

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
    case NAVIGATION_SCREEN_ID.MAIN:
      return mainIcon;
    case NAVIGATION_SCREEN_ID.MEALS:
      return mealsIcon;
    case NAVIGATION_SCREEN_ID.PRODUCTS:
      return productsIcon;
    case NAVIGATION_SCREEN_ID.SETTINGS:
      return settingsIcon;
  }
};
