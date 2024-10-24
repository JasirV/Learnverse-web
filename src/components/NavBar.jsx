import React, { useState } from 'react'
import { GiTreasureMap } from "react-icons/gi";
import {IoMdNotificationsOutline} from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowDownLong } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { SiStudyverse } from 'react-icons/si';


const NavBar = () => {
const [isOpend, setIsOpend] = useState(false);
const navigate=useNavigate()

  return (
    <>
    <div className='topbar w-full flex shadow items-center justify-center py-3 gap-5 md:py-6 px-4 rounded-3xl bg-white'>
        <form className='hidden md:flex items-center justify-center  w-2/4'>
            <input placeholder="Search" onChange={()=>{}} className="w-[18rem] lg:w-[38rem]  rounded-full py-3 outline-none text-sm font-light px-3 bg-faint-pink bg-opacity-25 border border-gray-100" />
        </form>

        {/* ICONS */}

        <div className='flex gap-4 items-center text-ascent-1 text-md md:text-xl'> 
        <div>
           <button onClick={()=>{}} className='text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border hover:bg-primary hover:text-white hover:border-none hover:text-md border-[#666] rounded-full bg-white'>Search</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default NavBar