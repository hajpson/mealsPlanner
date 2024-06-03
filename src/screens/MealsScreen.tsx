import { StyleSheet } from "react-native";
import { Layout } from "../components/Layout";
import ItemsList from "../components/List";
import { COLORS } from "../utils/constants";

const mealsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainPageContainer: {
    backgroundColor: COLORS.PLAIN_WHITE,
  },
});

export const MealsScreen = () => {
  return (
    <Layout
      style={[mealsScreenStyles.container, mealsScreenStyles.mainPageContainer]}
      skipBottomInset
    >
      {/* <CustomInput placeholderText="Look for wanted meal" /> */}
      <ItemsList />
    </Layout>
  );
};
