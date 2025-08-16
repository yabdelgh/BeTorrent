export interface SignUpFormData {
    firstName: string| null;
    lastName: string| null;
    username: string| null;
    email: string| null;
    password: string| null;
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

