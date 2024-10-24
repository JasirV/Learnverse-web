import React from 'react'
import Sidebar from '../components/SideBar'
import NavBar from '../components/NavBar'
import RightSuggestion from '../components/RigthSuggestion'

const Home = () => {
  return (
    <div className='flex justify-between home w-full  pb-20   bg-opacity-40 lg:rounded-lg h-screen overflow-hidden'>
        {/* leftSide */}
        <div className='h-full lg:flex'>
            <Sidebar/>
        </div>
        {/* center */}
        <div className="flex-1 h-full  px-4 flex flex-col gap-6 overflow-y-auto rounded-lg">
            <NavBar/>
        </div>
        {/* rightside */}
        <div  className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col pl-5 bg-white rounded-lg shadow-md gap-3 overflow-y-auto">
            <RightSuggestion/>
        </div>
    </div>
  )
}

export default Home