import React from 'react';
import Sidebar from '../components/SideBar';
import ProductList from '../components/ProductList';
import { useNavigate, useParams } from 'react-router-dom';
import ForumModule from '../components/ForumModule';
import CourseForm from '../components/CourseForm';
import Courses from '../components/Courses';

const MyCourses = () => {
    const { courseType } = useParams(); // Extracting 'courseType' directly from params
    const navigate=useNavigate()
    console.log('params', courseType); // Ensure this logs the correct value

    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is a description of Product 1.',
            price: 29.99,
            imageUrl: 'https://via.placeholder.com/200'
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is a description of Product 2.',
            price: 39.99,
            imageUrl: 'https://via.placeholder.com/200'
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is a description of Product 3.',
            price: 49.99,
            imageUrl: 'https://via.placeholder.com/200'
        },
        // Add more unique products as necessary...
    ];

    return (
        <div className='flex overflow-hidden h-screen'>
            <Sidebar />
            <div className='w-full overflow-y-auto'>
            {courseType === "new" ? (
                <Courses/>
            ) : (
                <div className='flex-1 mt-a overflow-y-auto'>
                    <div className='w-full pr-20 p-7 flex justify-end'>
                        <button onClick={()=>navigate('/mycourses/new')} className='bg-primary p-3 rounded-xl text-white font-semibold'>Create New Course</button>
                    </div>
                    <ProductList products={products} />
                </div>
            )}
            </div>
        </div>
    );
};

export default MyCourses;
