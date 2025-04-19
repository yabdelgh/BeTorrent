'use client'
export default function LoginButtons() {
    const handleGitHubLogin = () => {
      window.location.href = 'https://google.com';
    };
  
    const handleGoogleLogin = () => {
      window.location.href = 'http://localhost:3000/auth/google_oauth2';
    };
  
    return (
      <div className="space-y-4">
        <button
          onClick={handleGitHubLogin}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
        >
          Sign in with GitHub
        </button>
  
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          {/* Google Icon */}
          Sign in with Google
        </button>
      </div>
    );
  }
  
