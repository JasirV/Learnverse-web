import React, { useState } from 'react'
import api from '../api/axiosInterceptor'
const useOtpVerify = () => {
const [loading,setLoading]=useState(false)

const OtpVerify=async(data)=>{
    setLoading(true)
try {
  const response=await api.post("auth/verify",data)
    console.log(response,'respo in otpp')
       if(response.status===200){
            localStorage.setItem("user",JSON.stringify(response.data.user))
            dispatch(login(response.data.user));
            localStorage.setItem("token",response.data.token)
        }
   
} catch (error) {
    console.log(error)
}finally{
    setLoading(false)
}
}

return{loading,OtpVerify}
}

export default useOtpVerify