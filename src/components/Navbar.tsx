import { styles } from "../utils/styles";
import NavItem from "./NavItem";
import { TouchableOpacity, View } from "react-native";
import { NavbarProps } from "../types/NavbarProps";
import { SetIconFromNavigationScreenId } from "../helpers/SetIconFromNavigationScreenId";

export default function Navbar({
  state,
  descriptors,
  navigation,
}: NavbarProps) {
  return (
    <View style={styles.navbarWrapper}>
      <View style={styles.floatingNavbarContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={label.toString()}
            >
              <NavItem
                icon={
                  <SetIconFromNavigationScreenId
                    screenId={route.name}
                    isFocused={isFocused}
                  />
                }
                title={label.toString()}
                isFocused={isFocused}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
