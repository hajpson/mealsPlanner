import { StyleSheet, View } from "react-native";

import { Card } from "../components/Card";
import { CustomProgressChart } from "../components/CustomProgressChart";
import { CustomText } from "../components/CustomText";
import { Layout } from "../components/Layout";
import { todayDateMap } from "../helpers/todayDateMap";
import { COLORS } from "../utils/constants";

const mainScreenStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.PLAIN_WHITE,
    borderRadius: 24,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 12,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  todayText: {
    fontSize: 20,
    color: COLORS.PRIMARY2,
  },
  dayText: {
    fontSize: 26,
  },
  card: {
    backgroundColor: COLORS.GRAY_CONTRAST,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: COLORS.PRIMARY,
  },
  cardsHolder: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
    margin: 12,
  },
  caloriesHeader: {
    position: "absolute",
    top: 12,
  },
  caloriesSummary: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export const MainScreen = () => {
  const currentDay = todayDateMap().get(new Date().getDay());
  //todo: intake
  const intake = 245;

  return (
    <Layout skipBottomInset>
      <View style={mainScreenStyles.mainWrapper}>
        <View style={mainScreenStyles.headerContainer}>
          <CustomText style={mainScreenStyles.todayText}>Today is </CustomText>
          <CustomText style={mainScreenStyles.dayText}>{currentDay}</CustomText>
        </View>

        <View style={mainScreenStyles.cardsHolder}>
          <Card style={mainScreenStyles.card}>
            <CustomProgressChart progressValue={intake} />

            <CustomText>Ingested - {intake}kcal</CustomText>
          </Card>

          <View style={mainScreenStyles.caloriesSummary}>
            <CustomText style={mainScreenStyles.caloriesHeader}>
              Calories breakdown
            </CustomText>

            <View>
              <CustomText>Protein: 67g (111kcal)</CustomText>

              <CustomText>Carbs: 163g (111kcal)</CustomText>

              <CustomText>Fats: 31g (111kcal)</CustomText>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};
