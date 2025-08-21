import SignInForm from '@containers/SignInForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login to BeTorrent',
  description: 'Login to your BeTorrent account to access',
  // other metadata
};
export default function SignUpPage() {
  return <SignInForm />;
}
