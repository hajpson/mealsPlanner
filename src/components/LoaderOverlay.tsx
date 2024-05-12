import { Modal, View, StyleSheet, ActivityIndicator } from "react-native";

import { CustomText } from "./CustomText";
import { LoaderOverlayProps } from "../types/props/LoaderOverlayProps";
import { COLORS } from "../utils/constants";

const loaderOverlayStyles = StyleSheet.create({
  centeredViewWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.OVERLAY,
  },
  centeredView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export const LoaderOverlay = ({ visible }: LoaderOverlayProps) => {
  return (
    <View style={loaderOverlayStyles.centeredViewWrapper}>
      <Modal animationType="fade" transparent visible={visible}>
        <View style={loaderOverlayStyles.centeredView}>
          <View style={loaderOverlayStyles.modalView}>
            <ActivityIndicator />
          </View>
        </View>
      </Modal>
    </View>
  );
};
