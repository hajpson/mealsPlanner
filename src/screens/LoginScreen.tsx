import * as SplashScreen from "expo-splash-screen";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { View as ViewMoti, AnimatePresence } from "moti";
import { useCallback, useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import WavesBottom from "../../assets/wavesBottom.svg";
import { Layout } from "../components/Layout";
import { LoaderOverlay } from "../components/LoaderOverlay";
import { LoginCard } from "../components/LoginCard";
import { LoginScreenTitle } from "../components/LoginScreenTitle";
import { RegisterCard } from "../components/RegisterCard";
import { SignLink } from "../components/SignLink";
import { loginScreenStyles, uniStyles } from "../utils/styles";

SplashScreen.preventAutoHideAsync();

export const LoginScreen = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    setAuth(getAuth());

    setInterval(() => setIsLoading(false), 2000);
  }, []);

  const onLoginConfirmed = useCallback(() => {
    if (!auth) {
      return;
    }

    signInWithEmailAndPassword(auth, "", "");
  }, [auth]);

  return (
    <>
      <Layout style={uniStyles.mainPageContainer}>
        <KeyboardAvoidingView style={uniStyles.container}>
          <TouchableWithoutFeedback
            style={uniStyles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={uniStyles.container}>
              <View style={loginScreenStyles.wavesBackground}>
                <WavesBottom />
              </View>

              <AnimatePresence exitBeforeEnter>
                {isSignUpMode ? (
                  <ViewMoti
                    style={uniStyles.container}
                    key="register"
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <RegisterCard />
                    <SignLink
                      onPressed={() => setIsSignUpMode(!isSignUpMode)}
                      signMode="signUp"
                    />
                  </ViewMoti>
                ) : (
                  <ViewMoti
                    style={uniStyles.container}
                    key="login"
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <LoginScreenTitle />
                    <LoginCard
                      onConfirmed={async () => {
                        return true;
                      }}
                    />
                    <SignLink
                      onPressed={() => setIsSignUpMode(!isSignUpMode)}
                      signMode="signIn"
                    />
                  </ViewMoti>
                )}
              </AnimatePresence>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Layout>

      {isLoading && <LoaderOverlay visible={isLoading} />}
    </>
  );
};
