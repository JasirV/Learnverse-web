import React, { useState } from 'react';

const CourseForm = () => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    category: '',
    duration: '',
  });
  const [chapters, setChapters] = useState([{ title: '', description: '' }]);

  const addChapterRow = () => {
    setChapters([...chapters, { title: '', description: '' }]);
  };

  const handleInputChange = (e, index) => {
    const updatedChapters = [...chapters];
    updatedChapters[index][e.target.name] = e.target.value;
    setChapters(updatedChapters);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch to RTK Query for creating the course
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create Course</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={course.description}
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          name="category"
          value={course.category}
          onChange={(e) => setCourse({ ...course, category: e.target.value })}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Duration</label>
        <input
          type="text"
          name="duration"
          value={course.duration}
          onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          className="mt-1 p-2 block w-full border-gray-300 rounded-md"
        />
      </div>

      <div>
        <h3 className="text-md font-semibold mb-2">Chapters</h3>
        {chapters.map((chapter, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Chapter Title"
              value={chapter.title}
              onChange={(e) => handleInputChange(e, index)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="description"
              placeholder="Chapter Description"
              value={chapter.description}
              onChange={(e) => handleInputChange(e, index)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            />
          </div>
        ))}
        <button type="button" onClick={addChapterRow} className="px-4 py-2 bg-blue-500 text-white rounded-md">
          + Add Chapter
        </button>
      </div>

      <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
        Create Course
      </button>
    </form>
  );
};

export default CourseForm;
