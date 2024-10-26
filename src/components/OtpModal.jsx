import React, { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import useOtpVerify from '../hooks/useOtpVerify';

const OtpModal = ({ email}) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const {OtpVerify,loading}=useOtpVerify();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data={email,otp:otp.join('')}
   console.log(data,"otpptt")
  await OtpVerify(data)
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl transform transition-all">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-blue-600 w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Verify Your Email</h2>
            <div className="mt-4 bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-blue-700">
                We've sent a verification code to<br />
                <span className="font-medium">{email}</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex gap-3 justify-center">
              {otp.map((data, index) => (
                <input
                  key={index}
                  ref={(ref) => inputRefs.current[index] = ref}
                  className="w-12 h-14 text-center text-xl font-semibold rounded-lg border-2 border-gray-200 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all
                           hover:border-gray-300"
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium 
                         rounded-lg shadow transition-colors duration-200 
                         focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Verify Account
              </button>
              
              <div className="text-center text-sm">
                <span className="text-gray-600">Didn't receive code? </span>
                <button 
                  type="button"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Resend
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;