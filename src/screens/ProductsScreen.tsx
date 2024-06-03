import { View, StyleSheet } from "react-native";

import ItemsList from "../components/List";
import { COLORS } from "../utils/constants";

const productsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainPageContainer: {
    backgroundColor: COLORS.PLAIN_WHITE,
  },
});

export const ProductsScreen = () => {
  return (
    <View
      style={[
        productsScreenStyles.container,
        productsScreenStyles.mainPageContainer,
      ]}
    >
      {/* <CustomInput placeholderText="Look for wanted product" /> */}
      <ItemsList />
    </View>
  );
};
