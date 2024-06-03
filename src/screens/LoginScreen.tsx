import * as SplashScreen from "expo-splash-screen";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { View as ViewMoti, AnimatePresence } from "moti";
import { useCallback, useEffect, useReducer, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
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
import { COLORS } from "../utils/constants";
import { useToastContext } from "../hooks/useToastContext";
import { FirebaseError } from "firebase/app";
import { handleError } from "../helpers/handleError";
import {
  defaultSignInUpValues,
  signInUpReducer,
} from "../reducers/signInUpReducer";

const loginScreenStyles = StyleSheet.create({
  mainPageContainer: {
    backgroundColor: COLORS.PLAIN_WHITE,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wavesBackground: {
    position: "absolute",
    backgroundColor: "white",
  },
});

SplashScreen.preventAutoHideAsync();

export const LoginScreen = () => {
  const [state, dispatch] = useReducer(signInUpReducer, defaultSignInUpValues);

  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState<Auth | null>(null);
  const toastContext = useToastContext();

  useEffect(() => {
    setAuth(getAuth());

    const interval = setInterval(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  const onSignedInConfirmed = useCallback(async () => {
    if (!auth) {
      toastContext?.showToast({
        message: "Something went wrong",
      });
      return;
    }

    try {
      setIsLoading(true);
      const result = await signInWithEmailAndPassword(
        auth,
        state.signInEmail,
        state.signInPassword
      );
      //TODO: add user
      console.log(result);
    } catch (error) {
      toastContext?.showToast({
        message: "Something went wrong",
      });
      console.log(handleError(error));
    } finally {
      setIsLoading(false);
    }
  }, [auth]);

  const onSignedUpConfirmed = useCallback(async () => {
    if (!auth) {
      toastContext?.showToast({
        message: "Something went wrong",
      });

      return;
    }

    if (state.signUpPassword !== state.signUpRepeatPassword) {
      toastContext?.showToast({
        message: "Passwords are not matching",
      });

      return;
    }

    try {
      setIsLoading(true);
      console.log(state.signUpEmail);
      const result = await createUserWithEmailAndPassword(
        auth,
        state.signUpEmail,
        state.signUpPassword
      );
      //TODO: add user
      console.log(result);
    } catch (error) {
      toastContext?.showToast({
        message: "Something went wrong",
      });
      console.log(handleError(error));
    } finally {
      setIsLoading(false);
    }
  }, [auth]);

  const setSignInEmailValue = useCallback((value: string) => {
    dispatch({ type: "signInEmail", value });
  }, []);

  const setSignInPasswordValue = useCallback((value: string) => {
    dispatch({ type: "signInPassword", value });
  }, []);

  const setSignUpEmailValue = useCallback((value: string) => {
    dispatch({ type: "signUpEmail", value });
  }, []);

  const setSignUpPasswordValue = useCallback((value: string) => {
    dispatch({ type: "signUpPassword", value });
  }, []);

  const setSignUpRepeatPasswordValue = useCallback((value: string) => {
    dispatch({ type: "signUpRepeatPassword", value });
  }, []);

  return (
    <>
      <Layout style={loginScreenStyles.mainPageContainer}>
        <KeyboardAvoidingView style={loginScreenStyles.container}>
          <TouchableWithoutFeedback
            style={loginScreenStyles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={loginScreenStyles.container}>
              <View style={loginScreenStyles.wavesBackground}>
                <WavesBottom />
              </View>

              <AnimatePresence exitBeforeEnter>
                {isSignUpMode ? (
                  <ViewMoti
                    style={loginScreenStyles.container}
                    key="register"
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <RegisterCard
                      emailValue={state.signUpEmail}
                      passwordValue={state.signUpPassword}
                      repeatPasswordValue={state.signUpRepeatPassword}
                      setEmailValue={setSignUpEmailValue}
                      setPasswordValue={setSignUpPasswordValue}
                      setRepeatPasswordValue={setSignUpRepeatPasswordValue}
                      onConfirmed={onSignedUpConfirmed}
                    />
                    <SignLink
                      onPressed={() => setIsSignUpMode(!isSignUpMode)}
                      signMode="signUp"
                    />
                  </ViewMoti>
                ) : (
                  <ViewMoti
                    style={loginScreenStyles.container}
                    key="login"
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <LoginScreenTitle />
                    <LoginCard
                      emailValue={state.signInEmail}
                      passwordValue={state.signInPassword}
                      setEmailValue={setSignInEmailValue}
                      setPasswordValue={setSignInPasswordValue}
                      onConfirmed={onSignedInConfirmed}
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
