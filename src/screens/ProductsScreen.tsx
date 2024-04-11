import { View } from "react-native";
import { uniStyles } from "../utils/styles";
import ItemsList from "../components/List";

export const ProductsScreen = () => {
  return (
    <View
      style={[
        uniStyles.container,
        uniStyles.mainPageContainer
      ]}
    >
      {/* <CustomInput placeholderText="Look for wanted product" /> */}
      <ItemsList />
    </View>
  );
};
