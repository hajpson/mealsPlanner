import { View } from "react-native";
import { styles } from "../utils/styles";
import { CustomInput } from "../components/CustomInput";
import ItemsList from "../components/List";
import { CustomSafeAreaView } from "../components/CustomSafeAreaView";

export const ProductsScreen = () => {
  return (
    <CustomSafeAreaView>
      <View
        style={[
          styles.container,
          styles.listPageContainer
        ]}
      >
        <CustomInput />
        <ItemsList />
      </View>
    </CustomSafeAreaView>
  );
};
