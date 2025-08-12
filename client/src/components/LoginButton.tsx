'use client';
export default function LoginButtons() {
  const handleGitHubLogin = () => {
    window.location.href = 'https://google.com';
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google_oauth2';
  };

  return (
    <div className='space-y-4'>
      <button
        onClick={handleGitHubLogin}
        className='flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-900'
      >
        Sign in with GitHub
      </button>

      <button
        onClick={handleGoogleLogin}
        className='flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 transition hover:bg-gray-100'
      >
        {/* Google Icon */}
        Sign in with Google
      </button>
    </div>
  );
}
