import { useContext } from "react";

import { EatingGoalContext } from "../context/EatingGoalContext";

export const useEatingGoalContext = () => useContext(EatingGoalContext);
