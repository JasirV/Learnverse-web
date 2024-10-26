import { useState } from "react"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useSelectedState } from "rsuite/esm/DateInput"
import { reset } from "../store/courseSlice";
import api from "../api/axiosInterceptor";

const useCreateCourse=()=>{
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    const courseData = useSelector((state) => state.course.data);
    const createCourse=async()=>{
        setLoading(true)
        try {
            const response=await api.post('/courses/',courseData)
            if(response.status===201){
                toast.success('create SuccessFully')
                setLoading(false)
                dispatch(reset())
                return response
            }
        } catch (error) {
            console.error("Verification failed",error.response?.data||error.message)
        }finally{
            setLoading(false)
        }
    }
    return {
        createCourse,loading
    }
}
export default useCreateCourse