import { PropsWithChildren, ReactElement, ReactNode } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { CustomSafeAreViewProps } from "../types/CustomSafeAreaViewProps"
import { uniStyles } from "../utils/styles"

export const CustomSafeAreaView = ({ children, containerStyle }: CustomSafeAreViewProps) => {
    return (
        <SafeAreaView style={[uniStyles.mainWrapper, containerStyle]}>
            {children}
        </SafeAreaView>
    )
}