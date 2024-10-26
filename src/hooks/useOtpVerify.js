import { useState } from 'react';
import api from '../api/axiosInterceptor';
import { useDispatch } from 'react-redux'; 
import { login } from '../features/userSlice'; 
import { useNavigate } from 'react-router-dom';

const useOtpVerify = () => {
    const dispatch = useDispatch();
    const Navigate=useNavigate()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const OtpVerify = async (data) => {
        setLoading(true);
        setError(null); // Reset error state

        try {
            const response = await api.post("auth/verify", data);
            const result = response.data;
            
            // Store user data and token in localStorage
            localStorage.setItem("user", JSON.stringify(result.userVerified));
            localStorage.setItem("token", result.token);
            
            // Dispatch login action with user data
            console.log(result,'result')
            dispatch(login(result.userVerified));
            Navigate('/')
        } catch (err) {
            // Set error message for display
            setError(err.response?.data || err.message);
            console.error("Verification failed:", err.response?.data || err.message);
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    return {
        loading,
        OtpVerify,
        error,
    };
};

export default useOtpVerify;
