import React, { useState } from 'react'
import { Steps } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import CourseForm from './CourseForm';
import ChapterForm from './ChapterForm';
import CourseConfirmation from './CourseConfirmation';
const Courses = () => {
    const[step,setStep]=useState(0)
  return (
    <div className='w-full'>
        <div className=' flex justify-center p-10 '>
    <Steps current={step} className='w-9/12'>
    <Steps.Item title="Create Course" />
    <Steps.Item title="Add Chapters" />
    <Steps.Item title="Confirmation" />
  </Steps>
        </div>
        {step==0&&<CourseForm setStep={setStep}/>}
        {step==1&&<ChapterForm setStep={setStep}/>}
        {step==2&&<CourseConfirmation setStep={setStep}/>}
    </div>
  )
}

export default Courses