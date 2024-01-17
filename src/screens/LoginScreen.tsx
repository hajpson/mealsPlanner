import { View } from "react-native"
import { CustomSafeAreaView } from "../components/CustomSafeAreaView"
import * as SplashScreen from "expo-splash-screen";
import { loginScreenStyles, uniStyles } from "../utils/styles";
import WavesBottom from "../../assets/wavesBottom.svg";
import { CustomText } from "../components/CustomText";
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import { CustomInput } from "../components/CustomInput";
import { SocialButton } from "../components/SocialButton";
import { colors } from "../utils/constants";
import { LoginScreenTitle } from "../components/LoginScreenTitle";
import { CustomButton } from "../components/CustomButton";
import { useState } from "react";

SplashScreen.preventAutoHideAsync();

export const LoginScreen = () => {
    const [inputValue, setInputValue] = useState("");

    const onContinueButtonPressed = () => {

    }

    return (
        <CustomSafeAreaView containerStyle={uniStyles.mainPageContainer}>
            <View style={[uniStyles.container, loginScreenStyles.mainWrapper]}>
                <View style={loginScreenStyles.wavesBackground}>
                    <WavesBottom />
                </View>

                <LoginScreenTitle />

                <View style={loginScreenStyles.blurViewWrapper}>
                    <BlurView intensity={90} style={loginScreenStyles.blurViewContainer}>
                        <CustomText style={loginScreenStyles.subheaderText}>With the email address</CustomText>

                        <CustomInput
                            wrapperStyle={loginScreenStyles.inputWrapper}
                            inputStyle={loginScreenStyles.input}
                            placeholderText="Email address"
                            onChangeText={(value) => setInputValue(value)}
                            value={inputValue} />

                        <CustomButton
                            style={loginScreenStyles.continueButton}
                            onPressed={onContinueButtonPressed}>
                            <CustomText style={loginScreenStyles.continueButtonText}>Continue</CustomText>
                        </CustomButton>

                        <View style={loginScreenStyles.dividerContainer}>
                            <View style={loginScreenStyles.insideDividerLine} />
                            <CustomText>or</CustomText>
                            <View style={loginScreenStyles.insideDividerLine} />
                        </View>

                        <SocialButton
                            icon={<FontAwesome style={loginScreenStyles.socialButtonLogo} name="facebook-square" size={24} color={colors.plainWhite} />}
                            title="With Facebook account" />

                        <SocialButton
                            icon={<FontAwesome style={loginScreenStyles.socialButtonLogo} name="apple" size={24} color={colors.plainWhite} />}
                            title="With Apple account"
                            buttonStyle={loginScreenStyles.socialButtonSpacing} />

                        <SocialButton
                            icon={<FontAwesome style={loginScreenStyles.socialButtonLogo} name="google" size={24} color={colors.plainWhite} />}
                            title="With Google account"
                            buttonStyle={loginScreenStyles.socialButtonSpacing} />
                    </BlurView>
                </View>
            </View>
        </CustomSafeAreaView>
    )
}