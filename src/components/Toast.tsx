import { AnimatePresence, MotiView } from "moti";
import { Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "./CustomText";
import { ToastProps } from "../types/props/ToastProps";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../utils/constants";

const toastStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 16,
    right: 16,
    height: "auto",
    borderRadius: 12,
    padding: 12,
    display: "flex",
    backgroundColor: COLORS.ERROR,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: COLORS.MARBLE,
  },
});

export const Toast = () => {
  const toastContext = useContext(ToastContext);
  const { bottom } = useSafeAreaInsets();

  return (
    <AnimatePresence exitBeforeEnter>
      {toastContext?.toast.visible && (
        <MotiView
          key={`${toastContext?.toast.message}-toast`}
          style={[toastStyles.container, { bottom }]}
          from={{ translateY: 100, opacity: 1 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              type: "spring",
              duration: 500,
            },
            translateY: {
              type: "spring",
              duration: 1500,
            },
          }}
        >
          <CustomText style={toastStyles.title}>
            {toastContext?.toast.message}
          </CustomText>
          <Pressable onPress={toastContext?.hideToast}>
            <Ionicons name="close" size={30} color={COLORS.MARBLE} />
          </Pressable>
        </MotiView>
      )}
    </AnimatePresence>
  );
};
