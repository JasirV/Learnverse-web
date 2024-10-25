import React from 'react'
import Sidebar from '../components/SideBar';
import ProductList from '../components/ProductList';

const Mycourses = () => {
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
          id: 2,
          name: 'Product 2',
          description: 'This is a description of Product 2.',
          price: 39.99,
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
          id: 2,
          name: 'Product 2',
          description: 'This is a description of Product 2.',
          price: 39.99,
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
          id: 2,
          name: 'Product 2',
          description: 'This is a description of Product 2.',
          price: 39.99,
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
          id: 2,
          name: 'Product 2',
          description: 'This is a description of Product 2.',
          price: 39.99,
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
          id: 2,
          name: 'Product 2',
          description: 'This is a description of Product 2.',
          price: 39.99,
          imageUrl: 'https://via.placeholder.com/200'
        },
        
      ];
  return (
    <div className='flex overflow-hidden h-screen'>
        <div>
            <Sidebar/>
        </div>
        <div className=' w-full mt-a overflow-y-auto'>
            <div className='w-full  pr-20 p-7 flex justify-end'>
            <button className='bg-primary p-3 rounded-xl  text-white font-semibold'>Create New Course</button>
            </div>
            <ProductList products={products}/>
        </div>
    </div>
  )
}

export default Mycourses