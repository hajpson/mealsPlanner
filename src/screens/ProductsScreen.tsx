import { View } from "react-native";
import { CustomText } from "../components/CustomText";
import { getSafeAreaInsetsPadding } from "../helpers/getSafeAreaInsetsPadding";
import { styles } from "../utils/styles";
import { CustomInput } from "../components/CustomInput";
import ItemsList from "../components/List";

export const ProductsScreen = () => {
  const { paddingTop, paddingBottom } = getSafeAreaInsetsPadding();

  return (
    <View
      style={[
        styles.container,
        styles.listPageContainer,
        { paddingTop, paddingBottom },
      ]}
    >
      <CustomInput />
      <ItemsList />
    </View>
  );
};
