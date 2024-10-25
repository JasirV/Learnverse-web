import React from 'react'
import Sidebar from '../components/SideBar'
import NavBar from '../components/NavBar'
import RightSuggestion from '../components/RigthSuggestion'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'

const Home = () => {
  return (
    <div className='flex justify-between home w-full  pb-20   bg-opacity-40 lg:rounded-lg h-screen overflow-hidden'>
        {/* leftSide */}
        <div className='h-full lg:flex'>
            <Sidebar/>
        </div>
        {/* center */}
        <div className="flex-1 h-full  px-4 flex flex-col gap-6 overflow-y-auto rounded-lg mt-5">
            <NavBar/>
            <PostForm/>
            <PostCard 
             post={{
              id: 1,
              description: "This is an example post.",
              createdAt: new Date(),
              imageUrl: "https://via.placeholder.com/400"
            }}
            user={[
              {
                first_name: "John",
                last_name: "Doe",
                profile_pic: "https://via.placeholder.com/150"
              }
            ]}/>
        </div>
        {/* rightside */}
        <div  className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col pl-5 bg-white rounded-lg shadow-md gap-3 overflow-y-auto mt-5">
            <RightSuggestion/>
        </div>
    </div>
  )
}

export default Home