import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { EatingGoal } from "../types/EatingGoal";

type EatingGoalContextValue = {
  eatingGoal: EatingGoal;
  setEatingGoal: Dispatch<SetStateAction<EatingGoal>>;
};

const defaultEatingGoal = (): EatingGoal => {
  return {
    caloriesIntake: 2000,
    proteinsAmount: 100,
    carbsAmount: 301,
    fatsAmount: 44,
  };
};

export const EatingGoalContext = createContext<EatingGoalContextValue | null>(
  null,
);

export const EatingGoalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [eatingGoal, setEatingGoal] = useState<EatingGoal>(defaultEatingGoal);

  return (
    <EatingGoalContext.Provider value={{ eatingGoal, setEatingGoal }}>
      {children}
    </EatingGoalContext.Provider>
  );
};
