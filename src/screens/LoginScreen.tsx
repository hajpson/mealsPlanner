import { View } from "react-native"
import { View as ViewMoti } from "moti";
import * as SplashScreen from "expo-splash-screen";
import { loginScreenStyles, uniStyles } from "../utils/styles";
import WavesBottom from "../../assets/wavesBottom.svg";
import { LoginScreenTitle } from "../components/LoginScreenTitle";
import { LoginCard } from "../components/LoginCard";
import { AnimatePresence } from "moti";
import { useState } from "react";
import { RegisterCard } from "../components/RegisterCard";
import { SignUpLink } from "../components/SignUpLink";
import { Layout } from "../components/Layout";

SplashScreen.preventAutoHideAsync();

export const LoginScreen = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    return (
        <Layout style={uniStyles.mainPageContainer}>
            <View style={uniStyles.container}>
                <View style={loginScreenStyles.wavesBackground}>
                    <WavesBottom />
                </View>

                <AnimatePresence exitBeforeEnter>
                    {isSignUpMode
                        ?
                        <ViewMoti style={uniStyles.container} key="register" >
                            <RegisterCard />
                            <SignUpLink onPressed={() => setIsSignUpMode(!isSignUpMode)} />
                        </ViewMoti>
                        :
                        <ViewMoti style={uniStyles.container} key="login" from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <LoginScreenTitle />
                            <LoginCard />
                            <SignUpLink onPressed={() => setIsSignUpMode(!isSignUpMode)} />
                        </ViewMoti>}
                </AnimatePresence>
            </View>
        </Layout>
    )
}