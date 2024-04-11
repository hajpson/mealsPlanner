import { FC, PropsWithChildren, createContext } from "react";
import { MMKVStorage } from "../utils/mmkv";

export const MMKVContext = createContext<MMKVStorage | null>(null);

export const MMKVProvider: FC<PropsWithChildren> = ({ children }) => {
    const mmkvInstance = new MMKVStorage();
    mmkvInstance.createInstance();

    return (
        <MMKVContext.Provider value={mmkvInstance}>{children}</MMKVContext.Provider>
    );
}