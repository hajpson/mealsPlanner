export type SignInUpState = {
    signInEmail: string;
    signInPassword: string;
    signUpEmail: string;
    signUpPassword: string;
    signUpRepeatPassword: string;
}

export type SignInUpAction = {
    type: keyof SignInUpState;
    value: string;
}