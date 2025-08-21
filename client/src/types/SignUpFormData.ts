import { SignInFormData } from "./SignInFormData";

export interface SignUpFormData extends SignInFormData {
    firstName: string| null;
    lastName: string| null;
    email: string| null;
    confirmPassword: string| null;
}

export const SignUpFormInitValues: SignUpFormData = {
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
}

