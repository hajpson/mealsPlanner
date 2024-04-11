import { supabase } from "../helpers/supabase"
import { AUTH_STATE } from "../utils/constants";

type emailAndPassword = {
    email: string;
    password: string;
}

export const signInWithEmail = async ({email, password}: emailAndPassword) => {
    const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        console.warn(error.message);
        return AUTH_STATE.ERROR;
    }

    return AUTH_STATE.OK;
}

export const signUpNewUser = async ({ email, password }: emailAndPassword) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (!data?.user?.identities?.length) {
        return AUTH_STATE.ALREADY_EXISTS;
    } else if (error) {
        console.warn(error.message);
        return AUTH_STATE.ERROR;
    } else if (!data.session) {
        return AUTH_STATE.AWAITING_ACTIVATION;
    }

    return AUTH_STATE.OK;
}