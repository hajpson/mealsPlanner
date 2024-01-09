import * as Fonts from "expo-font";

export const useCustomFonts = async () => {
  await Fonts.loadAsync({
    LexendLight: require("../../assets/fonts/Lexend-Light.ttf"),
    Lexend: require("../../assets/fonts/Lexend-Regular.ttf"),
    LexendMedium: require("../../assets/fonts/Lexend-Medium.ttf"),
    LexendSemiBold: require("../../assets/fonts/Lexend-SemiBold.ttf"),
  });
};
