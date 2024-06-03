import {
  FC,
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ToastType } from "../types/ToastType";

type ToastProps = {
  message: string;
  type?: ToastType;
  visible?: boolean;
};

type ToastValues = {
  showToast: (props: ToastProps) => void;
  hideToast: () => void;
  toast: ToastProps;
};

const initialToast: ToastProps = {
  message: "",
  type: "info",
  visible: false,
};

export const ToastContext = createContext<ToastValues | null>(null);

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toast, setToast] = useState(initialToast);
  const timeout = useRef<NodeJS.Timeout>();

  const showToast = useCallback((props: ToastProps) => {
    setToast({ ...initialToast, visible: true, ...props });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ ...toast, visible: false });
  }, []);

  useEffect(() => {
    if (toast.visible) {
      timeout.current = setTimeout(hideToast, 5000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [hideToast, showToast, toast]);

  return (
    <ToastContext.Provider
      value={{ hideToast: hideToast, showToast: showToast, toast: toast }}
    >
      {children}
    </ToastContext.Provider>
  );
};
