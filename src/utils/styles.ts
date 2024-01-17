import { Dimensions, StyleSheet } from "react-native";
import { colors } from "./constants";

export const uniStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: colors.primary
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainPageContainer: {
    backgroundColor: colors.plainWhite,
    marginBottom: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  navItemContainer: {
    marginHorizontal: 20,
    alignItems: "center",
  },
  floatingNavbarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 12,
  },
  navbarWrapper: {
    backgroundColor: colors.plainWhite,
  },
  customText: {
    fontFamily: "LexendSemiBold",
    color: colors.dark,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: colors.plainWhite,
    borderRadius: 24
  },
  listItemContainer: {
    backgroundColor: colors.grayContrast,
    padding: 24,
    marginHorizontal: 12,
    borderRadius: 24,
  },
  separator: {
    height: 24,
  },
  customInputWrapper: {
    width: "100%",
    padding: 10,
    backgroundColor: colors.primary
  },
  customInput: {
    color: colors.plainWhite,
    marginHorizontal: 12,
    paddingVertical: 6,
    fontFamily: "Lexend",
    fontSize: 18
  },
  customButton: {
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 24
  },
  invisiblePlaceholder: {
    color: "transparent"
  }
});

export const loginScreenStyles = StyleSheet.create({
  wavesBackground: {
    position: "absolute"
  },
  titleContainer: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    top: 0
  },
  loginTitle: {
    fontSize: 34
  },
  outsideDividerLine: {
    marginVertical: 12,
    height: 2,
    width: 48,
    backgroundColor: colors.dark
  },
  lastLoginText: {
    marginBottom: 20
  },
  mainWrapper: {
    justifyContent: "center"
  },
  blurViewWrapper: {
    borderRadius: 24,
    overflow: "hidden",
    width: Dimensions.get("screen").width - 48
  },
  blurViewContainer: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    display: "flex",
    alignItems: "center"
  },
  inputWrapper: {
    backgroundColor: "transparent",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.dark,
    marginTop: 20
  },
  input: {
    color: colors.dark
  },
  continueButton: {
    backgroundColor: colors.light,
    width: "100%",
    marginTop: 12,
    alignItems: "center"
  },
  disabledContinueButton: {
    backgroundColor: colors.grayContrast,
    width: "100%",
    marginTop: 12,
    alignItems: "center"
  },
  continueButtonText: {
    color: colors.plainWhite,
    fontSize: 20,
    paddingVertical: 4
  },
  disabledContinueButtonText: {
    color: colors.darkerGrayContrast,
    fontSize: 20,
    paddingVertical: 4
  },
  subheaderText: {
    fontSize: 20
  },
  dividerContainer: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12
  },
  insideDividerLine: {
    flex: 1,
    borderBottomColor: colors.dark,
    borderBottomWidth: StyleSheet.hairlineWidth 
  },
  socialButtonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  socialButtonText: {
    color: colors.plainWhite,
    alignSelf: "center",
    fontSize: 16,
    paddingVertical: 6
  },
  socialButtonLogo: {
    position: "absolute",
    left: 24
  },
  socialButtonSpacing: {
    marginTop: 12
  }
});
