import { StyleSheet } from "react-native";
import { colors } from "./constants";

export const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: colors.primary
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  listPageContainer: {
    backgroundColor: colors.plainWhite,
    marginBottom: 10,
    borderRadius: 20
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
    borderBottomWidth: 2,
    borderBottomColor: colors.dark,
    backgroundColor: colors.plainWhite
  },
  customInput: {
    color: colors.plainWhite,
    marginHorizontal: 12,
    paddingVertical: 6,
    fontFamily: "Lexend",
  },
});
