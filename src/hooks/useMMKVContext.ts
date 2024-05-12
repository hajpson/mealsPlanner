import { useContext } from "react";

import { MMKVContext } from "../context/MMKVContext";

export const useMMKVContext = () => useContext(MMKVContext);
