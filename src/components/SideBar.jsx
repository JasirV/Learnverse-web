import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home, Settings, BookOpen, User, CircleHelp, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SiStudyverse } from 'react-icons/si';
import { FiMenu } from 'react-icons/fi'; // Import the menu icon

const MenuItem = ({ icon: Icon, label, items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <div 
        className="flex items-center justify-between p-2 group hover:bg-primary rounded cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
          if (onClick) onClick(label); 
        }}
      >
        <div className="flex items-center text-gray-400 group-hover:text-white">
          <Icon className="mr-2 group-hover:text-white" size={18} />
          <span className="group-hover:text-white">{label}</span>
        </div>
        {items && (isOpen ? <ChevronUp className="group-hover:text-white" size={18} /> : <ChevronDown className="group-hover:text-white" size={18} />)}
      </div>
      {isOpen && items && (
        <div className="ml-6 mt-1">
          {items.map((item, index) => (
            <div key={index} className="p-2 hover:bg-gray-700 rounded cursor-pointer">
              <p className="hover:text-white" onClick={() => onClick(item)}> {item} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuItemClick = (label) => {
    console.log(label, "label");
    switch (label) {
      case 'Home':
        navigate('/');
        break;
      case 'Mycourses':
        navigate('/mycourses');
        break;
      case "Settings":
        navigate('/settings'); // Update to correct route
        break;
      case "Profile":
        navigate('/profile'); // Update to correct route
        break;
      case "Help":
        navigate('/help'); // Update to correct route
        break;
      case "logout":
        // Handle logout logic here
        navigate('/'); // Update to correct route
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        className="sm:hidden absolute p-2 text-primary rounded "
      >
        <FiMenu size={24} /> {/* Use FiMenu icon instead of text */}
      </button>
      <div className={`w-64 border mt-2 mb-5 text-white p-4 h-screen rounded-tr-xl rounded-br-xl ${isSidebarOpen ? 'block' : 'hidden relative '} sm:flex flex-col justify-between`}>
        <div>
          <div className="mb-6 w-full flex">
            <div className='flex items-center gap-3 mt-3'>
              <div className='bg-primary p-2 rounded-full flex items-center justify-center'>
                <SiStudyverse color='#f9cfe7' size={30} />
              </div>
              <h1 className='text-xl font-medium text-primary'>Learnverse</h1>
            </div>
          </div>
          <div className="space-y-2">
            <MenuItem icon={Home} label="Home" onClick={handleMenuItemClick} />
            <MenuItem 
              icon={BookOpen} 
              label="Mycourses" 
              items={["Course 1", "Course 2", "Course 3"]} // Add nested items if necessary
              onClick={handleMenuItemClick} 
            />
            <MenuItem icon={Settings} label="Settings" onClick={handleMenuItemClick} />
            <MenuItem icon={User} label="Profile" onClick={handleMenuItemClick} />
          </div>
        </div>
        <div className='w-full h-96 flex flex-col justify-end'>
          <MenuItem icon={CircleHelp} label="Help" onClick={handleMenuItemClick} />
          <MenuItem icon={LogOut} label="Logout" onClick={handleMenuItemClick} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
