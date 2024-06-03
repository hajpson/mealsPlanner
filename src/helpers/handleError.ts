import { FirebaseError } from "firebase/app"

export const handleError = (error: unknown) => {
    if (error instanceof FirebaseError) {
        return `cause: ${error.cause}, message: ${error.message}, stack: ${error.stack}`;
    }

    return error;
}