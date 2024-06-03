import { SignInUpAction, SignInUpState } from "../types/signInUpReducerBundle";

export const signInUpReducer = (state: SignInUpState, action: SignInUpAction): SignInUpState => {
    return { ...state, [action.type]: action.value }
}

export const defaultSignInUpValues: SignInUpState = {
    signInEmail: '',
    signInPassword: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpRepeatPassword: ''
}