import React, { useState } from "react";
import { SiStudyverse } from "react-icons/si";
import LoginImg from "../assets/images/LoginImg.jpg";
import { useNavigate } from "react-router-dom";

const SingnUp = () => {
    const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-2/3 h-3/4 rounded-xl flex shadow-xl border bg-white ">
        <div className="w-1/2 h-full flex flex-col justify-center p-10 ">
          {/* Heading and Icon */}
          <div className="mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-full flex items-center justify-center">
                {/* Optional: Add an icon or initial here */}
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
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-normal text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Full Name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              >
                Singn Up
              </button>
            </div>
          </form>
          <div className="flex w-full justify-end text-blue-500 font-light mt-2" onClick={()=>{navigate('/login')}}>
            <a href="#" className="text-sm hover:underline">
              Already have an account?
            </a>
          </div>
        </div>
        <div className="w-1/2 h-full relative flex  items-center justify-center overflow-hidden rounded-lg bg-background  ">
          {/* Optional: Add any desired content or image */}
          <img
            src={LoginImg}
            className="w-full h-full object-cover"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default SingnUp;
