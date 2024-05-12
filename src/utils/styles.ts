import { Dimensions, StyleSheet } from "react-native";

import { COLORS } from "./constants";

export const uniStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainPageContainer: {
    backgroundColor: COLORS.PLAIN_WHITE,
  },
  navItemContainer: {
    alignItems: "center",
  },
  floatingNavbarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.PRIMARY,
    paddingBottom: 24,
    paddingTop: 12,
  },
  navbarWrapper: {
    backgroundColor: COLORS.PLAIN_WHITE,
  },
  customText: {
    fontFamily: "LexendSemiBold",
    color: COLORS.DARK,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: COLORS.PLAIN_WHITE,
    borderRadius: 24,
  },
  listItemContainer: {
    backgroundColor: COLORS.GRAY_CONTRAST,
    padding: 24,
    marginHorizontal: 12,
    borderRadius: 24,
  },
  separator: {
    height: 18,
  },
  customInputWrapper: {
    width: "100%",
    padding: 10,
    backgroundColor: COLORS.PRIMARY,
  },
  customInput: {
    color: COLORS.PLAIN_WHITE,
    marginHorizontal: 12,
    paddingVertical: 6,
    fontFamily: "Lexend",
    fontSize: 18,
  },
  customButton: {
    padding: 12,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 24,
  },
  invisiblePlaceholder: {
    color: "transparent",
  },
});

export const loginScreenStyles = StyleSheet.create({
  wavesBackground: {
    position: "absolute",
    backgroundColor: "white",
  },
  titleContainer: {
    marginBottom: 12,
  },
  loginTitle: {
    fontSize: 34,
  },
  outsideDividerLine: {
    marginVertical: 12,
    height: 2,
    width: 48,
    backgroundColor: COLORS.DARK,
  },
  lastLoginText: {
    marginBottom: 20,
  },
  blurViewWrapper: {
    borderRadius: 24,
    overflow: "hidden",
    width: Dimensions.get("screen").width - 48,
  },
  blurViewContainer: {
    padding: 18,
    display: "flex",
    alignItems: "center",
  },
  inputWrapper: {
    backgroundColor: "transparent",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.DARK,
    marginTop: 20,
  },
  input: {
    color: COLORS.DARK,
  },
  continueButton: {
    backgroundColor: COLORS.LIGHT,
    width: "100%",
    marginTop: 12,
    alignItems: "center",
  },
  disabledContinueButton: {
    backgroundColor: COLORS.GRAY_CONTRAST,
    width: "100%",
    marginTop: 12,
    alignItems: "center",
  },
  continueButtonText: {
    color: COLORS.PLAIN_WHITE,
    fontSize: 20,
    paddingVertical: 4,
  },
  disabledContinueButtonText: {
    color: COLORS.DARKER_GRAY_CONTRAST,
    fontSize: 20,
    paddingVertical: 4,
  },
  subheaderText: {
    fontSize: 20,
  },
  dividerContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  insideDividerLine: {
    flex: 1,
    borderBottomColor: COLORS.DARK,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  socialButtonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    color: COLORS.PLAIN_WHITE,
    alignSelf: "center",
    fontSize: 16,
    paddingVertical: 6,
  },
  socialButtonLogo: {
    position: "absolute",
    left: 24,
  },
  socialButtonSpacing: {
    marginTop: 12,
  },
  signUpLinkContainer: {
    marginTop: 12,
  },
  signUpLinkText: {
    color: COLORS.PLAIN_WHITE,
    fontSize: 20,
  },
});
