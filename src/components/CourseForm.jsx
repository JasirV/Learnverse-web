import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaImage } from 'react-icons/fa';
import { setCourseId } from '../store/courseSlice';
import handleFileUpload from '../utils/handleFileUpload';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../api/axiosInterceptor';

const CourseForm = ({ setStep }) => {
  const dispatch = useDispatch();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    duration: '',
    category: '',
    coverImage: null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFieldChange = (field, value) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      [field]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        setIsUploading(true);
        const imageUrl = await handleFileUpload(file);
        handleFieldChange('coverImage', imageUrl);
      } catch (error) {
        console.error("Failed to upload image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const onConfirm = async () => {
    setLoading(true);
    try {
      const response = await api.post('/courses/', course);
      if (response.status === 201) {
        toast.success("Course Created Successfully");
        dispatch(setCourseId(response.data.course_id));
        setLoading(false);
        navigate("/mycourses");
      }
    } catch (error) {
      console.error("Error creating course:", error.response?.data || error.message);
      toast.error("Failed to create course");
    } finally {
      setLoading(false);
    }
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
          <select
            value={course.duration}
            onChange={(e) => handleFieldChange('duration', e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select Duration</option>
            <option value="1 month">1 Month</option>
            <option value="3 months">3 Months</option>
            <option value="6 months">6 Months</option>
            <option value="1 year">1 Year</option>
          </select>
        </div>

        {/* Course Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Course Category</label>
          <select
            value={course.category}
            onChange={(e) => handleFieldChange('category', e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select Category</option>
            <option value="Technology & Programming">Technology & Programming</option>
            <option value="Business & Management">Business & Management</option>
            <option value="Design & Multimedia">Design & Multimedia</option>
            <option value="Personal Development">Personal Development</option>
            <option value="Academic Subjects">Academic Subjects</option>
          </select>
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
          {/* {course.coverImage && (
            <img
              src={URL.createObjectURL(coverImage)}
              alt="Cover Preview"
              className="mt-2 rounded-md"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          )} */}
          {isUploading && <p>Uploading...</p>}
        </div>

        {/* Continue Button */}
        {/* <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Continue
        </button> */}

        {/* Confirm and Create Course Button */}
        <button
          type="button"
          onClick={onConfirm}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Course'}
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
