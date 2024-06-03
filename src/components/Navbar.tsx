import NavItem from "./NavItem";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NavbarProps } from "../types/props/NavbarProps";
import { SetIconFromNavigationScreenId } from "../helpers/SetIconFromNavigationScreenId";
import { COLORS } from "../utils/constants";

const navbarStyles = StyleSheet.create({
  floatingNavbarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.PRIMARY,
    paddingBottom: 24,
    paddingTop: 12,
  },
  navbarWrapper: {
    backgroundColor: COLORS.PLAIN_WHITE,
  },
});

export default function Navbar({
  state,
  descriptors,
  navigation,
}: NavbarProps) {
  return (
    <View style={navbarStyles.navbarWrapper}>
      <View style={navbarStyles.floatingNavbarContainer}>
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
