
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FaGithub } from 'react-icons/fa';

const AuthButton = ({ onGoogleSuccess, onGoogleError, onGitHubClick }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Google Auth */}
      <GoogleLogin
        onSuccess={onGoogleSuccess}
        onError={onGoogleError}
        className="w-full"
      />
      
      {/* GitHub Auth */}
      <button
        onClick={onGitHubClick}
        className="flex items-center justify-center gap-2 w-full bg-gray-800 text-white p-3 rounded-full font-medium hover:bg-gray-700 transition-colors duration-200"
      >
        <FaGithub size={20} />
        <span>Sign in with GitHub</span>
      </button>
    </div>
  );
};

export default AuthButton;
