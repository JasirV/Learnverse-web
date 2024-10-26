import React, { useState } from "react";
import { SiStudyverse } from "react-icons/si";
import LoginImg from "../assets/images/LoginImg.jpg";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import OtpModal from "../components/OtpModal";
import useSignup from "../hooks/useSingnup";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isModal, setIsModal] = useState(true);
  const { signup, signupSuccess, signupLoading } = useSignup();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password, username: fullName };
    const response = await signup(data);
    console.log(signupSuccess, "response");
    if (signupSuccess) {
      setIsModal(true);
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  const handleGitHubClick = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full relative">
        <div className="w-2/3 rounded-xl flex shadow-xl border bg-white">
          <div className="w-1/2 h-full flex flex-col justify-center p-10">
            {/* Heading and Icon */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-full flex items-center justify-center">
                  <SiStudyverse color="#f9cfe7" size={30} />
                </div>
                <h1 className="text-xl font-medium text-primary">Learnverse</h1>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="ml-10 mb-6">
              <p className="font-medium text-md text-gray-800">
                Create your account
              </p>
              <p className="font-light text-sm text-gray-600">Welcome back</p>
            </div>

            {/* Form Section */}
            <form
              className="w-full flex flex-col justify-center items-center gap-4 p-4"
              onSubmit={onSubmit}
            >
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-normal text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-gray-100 w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-normal text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-normal text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100 w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="w-full mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 w-full p-3 rounded-full text-white font-medium hover:bg-blue-600 transition-colors duration-200"
                  disabled={signupLoading}
                >
                  {signupLoading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="flex w-full justify-center mt-4">
              <AuthButton
                onGoogleSuccess={handleGoogleSuccess}
                onGoogleError={handleGoogleError}
                onGitHubClick={handleGitHubClick}
              />
            </div>
            <div
              className="flex w-full justify-end text-blue-500 font-light mt-2"
              onClick={() => navigate("/login")}
            >
              <a className="text-sm hover:underline">Already have an account?</a>
            </div>
          </div>
          <div className="w-1/2 relative flex items-center justify-center overflow-hidden rounded-lg bg-background">
            <img
              src={LoginImg}
              className="w-full h-full object-cover"
              alt="Login"
            />
          </div>
        </div>
        {/* Conditional Rendering of OTP Modal */}
        {isModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <OtpModal email={email} />
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
