import { StyleSheet } from "react-native";
import { colors } from "./constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listPageContainer: {
    backgroundColor: colors.light,
  },
  navItemContainer: {
    marginHorizontal: 20,
    alignItems: "center",
  },
  floatingNavbarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.dark,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    paddingVertical: 12,
  },
  navbarWrapper: {
    backgroundColor: colors.light,
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
  },
  listItemContainer: {
    borderWidth: 2,
    borderColor: colors.medium,
    padding: 12,
    marginHorizontal: 12,
    borderRadius: 12,
  },
  separator: {
    height: 12,
  },
  customInputWrapper: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: colors.dark,
    backgroundColor: colors.medium,
  },
  customInput: {
    color: colors.plainWhite,
    marginHorizontal: 12,
    paddingVertical: 6,
    fontFamily: "Lexend",
  },
});
