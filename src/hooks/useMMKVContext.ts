import { useContext } from "react";
import { MMKVContext } from "../context/mmkvContext";

export const useMMKVContext = () => useContext(MMKVContext);
