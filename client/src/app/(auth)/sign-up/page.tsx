
import SignUpForm from '@containers/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create Your Account",
  description: "Create your account to start using BeTorrent",
  // other metadata
};
export default function SignInPage() {
  return (  <SignUpForm />
  );
}
