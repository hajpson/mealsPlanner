import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

export const useToastContext = () => useContext(ToastContext);