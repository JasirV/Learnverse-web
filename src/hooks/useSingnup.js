import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import api from "../api/axiosInterceptor";

const useSignup = () => {
  const signupMutation = useMutation({
    mutationFn: async (data) => {
      const response = await api.post('auth/register', data);
      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error("Something went wrong");
      }
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return {
    signup: signupMutation.mutate,
    signupLoading: signupMutation.isLoading,
    signupSuccess: signupMutation.isSuccess,
    signupError: signupMutation.isError,
  };
};

export default useSignup;
