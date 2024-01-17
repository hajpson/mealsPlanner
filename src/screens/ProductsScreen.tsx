import { View } from "react-native";
import { uniStyles } from "../utils/styles";
import { CustomInput } from "../components/CustomInput";
import ItemsList from "../components/List";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";

export const ProductsScreen = () => {
  return (
    <CustomSafeAreaView>
      <View
        style={[
          uniStyles.container,
          uniStyles.mainPageContainer
        ]}
      >
        <CustomInput placeholderText="Look for wanted product" />
        <ItemsList />
      </View>
    </CustomSafeAreaView>
  );
};
