import { Layout } from "../components/Layout";
import ItemsList from "../components/List";
import { uniStyles } from "../utils/styles";

export const MealsScreen = () => {
  return (
    <Layout
      style={[uniStyles.container, uniStyles.mainPageContainer]}
      skipBottomInset
    >
      {/* <CustomInput placeholderText="Look for wanted meal" /> */}
      <ItemsList />
    </Layout>
  );
};
