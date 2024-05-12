import { CardProps } from "./CardProps";
import { MacrosSummaryProps } from "./MacrosSummaryProps";

export type MacroCardProps = {
  title: string;
} & CardProps &
  MacrosSummaryProps;
