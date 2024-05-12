import { View } from "react-native";

import ItemsList from "../components/List";
import { uniStyles } from "../utils/styles";

export const ProductsScreen = () => {
  return (
    <View style={[uniStyles.container, uniStyles.mainPageContainer]}>
      {/* <CustomInput placeholderText="Look for wanted product" /> */}
      <ItemsList />
    </View>
  );
};
