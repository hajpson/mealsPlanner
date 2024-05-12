import { ReactNode } from "react";

export type NavItemProps = {
  title: string | ReactNode;
  icon: React.JSX.Element;
  isFocused: boolean;
};
