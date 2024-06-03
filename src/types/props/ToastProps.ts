import { ToastType } from "../ToastType";

export type ToastProps = {
    title: string;
    toastType: ToastType;
    isVisible: boolean;
}