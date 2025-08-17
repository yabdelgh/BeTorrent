export interface SignInFormData {
  username: string | null;
  password: string | null;
}

export const SignUpFormInitValues: SignInFormData = {
  username: null,
  password: null,
};
