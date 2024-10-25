import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaImage } from 'react-icons/fa';
import { setCourseField } from '../store/courseSlice';

const CourseForm = ({ setStep }) => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setCourseField({ coverImage: file }));
    }
  };

  const handleFieldChange = (field, value) => {
    dispatch(setCourseField({ [field]: value }));
  };

  const handleContinue = (e) => { //this function not working fix this 
    console.log("hai")
    e.preventDefault();
    setStep(1); // Proceed to the next step for chapter creation
  };

  return (
    <div>
      <form onSubmit={handleContinue} className="w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Create Course</h2>

        {/* Course Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            value={course.title}
            onChange={(e) => handleFieldChange('title', e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Description</label>
          <textarea
            value={course.description}
            onChange={(e) => handleFieldChange('description', e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Course Duration */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Duration</label>
          <input
            type="text"
            value={course.duration}
            onChange={(e) => handleFieldChange('duration', e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Course Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Category</label>
          <input
            type="text"
            value={course.category}
            onChange={(e) => handleFieldChange('category', e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Cover Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Cover Image</label>
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <FaImage size={24} className="text-gray-600 mr-2" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
              <span className="text-gray-600">Upload Cover Image</span>
            </label>
          </div>
          {course.coverImage && (
            <img
              src={URL.createObjectURL(course.coverImage)}
              alt="Cover Preview"
              className="mt-2 rounded-md"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          )}
        </div>

        {/* Continue Button */}
        <button type="submit" className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
          Continue
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
