import { PropsWithChildren, ReactElement, ReactNode } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { CustomSafeAreViewProps } from "../types/CustomSafeAreaViewProps"
import { styles } from "../utils/styles"

export const CustomSafeAreaView = ({ children }: CustomSafeAreViewProps) => {
    return (
        <SafeAreaView style={styles.mainWrapper}>
            {children}
        </SafeAreaView>
    )
}