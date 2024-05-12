import * as SplashScreen from "expo-splash-screen";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { db } from "../../firebaseConfig";
import { Card } from "../components/Card";
import { CustomProgressChart } from "../components/CustomProgressChart";
import { CustomText } from "../components/CustomText";
import { Layout } from "../components/Layout";
import { LinearMacroBar } from "../components/LinearMacroBar";
import { MacroCard } from "../components/MacroCard";
import { getAllMacros } from "../helpers/getMacros";
import { getToday } from "../helpers/getToday";
import { isLastItem } from "../helpers/isLastItem";
import { useEatingGoalContext } from "../hooks/useEatingGoalContext";
import { Meal } from "../types/Meal";
import { COLORS } from "../utils/constants";

const mainScreenStyles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: COLORS.PLAIN_WHITE,
    borderRadius: 24,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  todayText: {
    fontSize: 20,
    color: COLORS.PRIMARY2,
    fontFamily: "Lexend",
  },
  dayText: {
    fontSize: 26,
  },
  card: {
    backgroundColor: COLORS.GRAY_CONTRAST,
    justifyContent: "center",
    flexDirection: "row",
    flexGrow: 1,
  },
  cardText: {
    color: COLORS.PRIMARY,
  },
  cardsHolder: {
    flexDirection: "row",
    marginVertical: 12,
    marginHorizontal: 14,
    gap: 16,
  },
  caloriesSummary: {
    alignItems: "center",
    gap: 16,
    flexGrow: 1,
  },
  intakeTitle: {
    marginTop: 12,
    textAlign: "center",
    color: COLORS.PRIMARY2,
    fontFamily: "Lexend",
  },
  mealCard: {
    marginHorizontal: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  lastMealCard: {
    marginBottom: 24,
  },
  mealCardWrapper: {},
  scrollview: {
    paddingTop: 12,
    borderRadius: 24,
  },
});

const fakeData: Meal[] = [
  {
    id: "123",
    name: "Breakfast",
    carbsAmount: 20,
    proteinsAmount: 20,
    fatsAmount: 20,
  },
  {
    id: "332",
    name: "Snack",
    carbsAmount: 20,
    proteinsAmount: 20,
    fatsAmount: 2,
  },
  {
    id: "321",
    name: "Dinner",
    carbsAmount: 20,
    proteinsAmount: 10,
    fatsAmount: 12,
  },
  {
    id: "311",
    name: "Snack 2",
    carbsAmount: 5,
    proteinsAmount: 1,
    fatsAmount: 1,
  },
  {
    id: "231",
    name: "Dinner 2",
    carbsAmount: 75,
    proteinsAmount: 25,
    fatsAmount: 1,
  },
];

SplashScreen.preventAutoHideAsync();

export const MainScreen = () => {
  useEffect(() => {
    (async () => {
      try {
        // const docRef = await addDoc(collection(db, "products"), {
        //   name: "test",
        //   proteins: 123,
        //   carbohydrates: 123,
        //   fats: 123,
        // });

        const q = query(collection(db, "products"));
        const querySnap = await getDocs(q);

        console.log(querySnap);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const eatingGoalContext = useEatingGoalContext();
  const { carbs, proteins, fats, intake } = getAllMacros(fakeData);

  return (
    <Layout skipBottomInset>
      <View style={mainScreenStyles.mainWrapper}>
        <ScrollView
          style={mainScreenStyles.scrollview}
          showsVerticalScrollIndicator={false}
        >
          <View style={mainScreenStyles.headerContainer}>
            <CustomText style={mainScreenStyles.todayText}>
              Today is{" "}
            </CustomText>
            <CustomText style={mainScreenStyles.dayText}>
              {getToday()}
            </CustomText>
          </View>

          <View style={mainScreenStyles.cardsHolder}>
            <Card style={mainScreenStyles.card}>
              <View
                style={{ alignItems: "center", justifyContent: "space-evenly" }}
              >
                <CustomProgressChart
                  currentValue={intake}
                  maxValue={eatingGoalContext?.eatingGoal.caloriesIntake ?? 0}
                />

                <View style={{ alignItems: "center" }}>
                  <CustomText style={mainScreenStyles.intakeTitle}>
                    Ingested
                  </CustomText>

                  <CustomText>{intake}kcal</CustomText>
                </View>
              </View>

              <View />
            </Card>

            <Card style={mainScreenStyles.card}>
              <View style={mainScreenStyles.caloriesSummary}>
                <LinearMacroBar
                  title="Proteins"
                  currentValue={proteins}
                  maxValue={eatingGoalContext?.eatingGoal.proteinsAmount ?? 0}
                />

                <LinearMacroBar
                  title="Carbs"
                  currentValue={carbs}
                  maxValue={eatingGoalContext?.eatingGoal.carbsAmount ?? 0}
                />

                <LinearMacroBar
                  title="Fats"
                  currentValue={fats}
                  maxValue={eatingGoalContext?.eatingGoal.fatsAmount ?? 0}
                />
              </View>
            </Card>
          </View>

          {fakeData.map((meal, index) => {
            return (
              <MacroCard
                key={meal.id}
                title={meal.name}
                carbs={meal.carbsAmount}
                proteins={meal.proteinsAmount}
                fats={meal.fatsAmount}
                style={[
                  mainScreenStyles.mealCard,
                  isLastItem(fakeData, index) && mainScreenStyles.lastMealCard,
                ]}
              />
            );
          })}
        </ScrollView>
      </View>
    </Layout>
  );
};
