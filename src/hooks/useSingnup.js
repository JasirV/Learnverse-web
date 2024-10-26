import { useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axiosInterceptor";

const useSignup = () => {
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState(null);

  const signup = async (data) => {
    setSignupLoading(true);
    setSignupError(null);
    try {
      const response = await api.post("auth/register", data);
      console.log(response, "response in useSignup"); // log response for debugging
      console.log(response.status,'thisstau')
      if (response.status === 200||response.status==201) {
        console.log("201 kitti");
        setSignupSuccess(true);
        toast.success("Signup successful!");
        return response;
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Signup failed.");
      setSignupError(error);
      throw error; // in case you need to handle this error in the component
    } finally {
      setSignupLoading(false);
    }
  };

  return {
    signup,
    signupLoading,
    signupSuccess,
    signupError,
  };
};

export default useSignup;
