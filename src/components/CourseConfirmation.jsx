import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ConfirmationModal from './ConfirmationModal';

const CourseConfirmation = ({ setStep }) => {
  // State for modal open/close
  const [isOpen, setIsOpen] = useState(false);

  // Access course and chapters from Redux store
  const { course, chapters } = useSelector((state) => state.course);
  console.log(course);
  
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      {/* Render modal only when isOpen is true */}
      {isOpen && <ConfirmationModal isOpen={isOpen} setIsOpen={setIsOpen} />}

      <h2 className="text-lg font-semibold mb-4">Course Confirmation</h2>

      {/* Course Details */}
      <div className="mb-4">
        <h3 className="font-semibold">Course Details:</h3>
        <p><strong>Title:</strong> {course.title}</p>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Category:</strong> {course.category}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        {course.coverImage && (
          <img
            src={URL.createObjectURL(course.coverImage)}
            alt="Cover Preview"
            className="mt-2 rounded-md"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        )}
      </div>

      {/* Chapters List */}
      {chapters.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold">Chapters:</h3>
          {chapters.map((chapter, index) => (
            <div key={index} className="border-t pt-2">
              <h4 className="font-semibold">{chapter.title}</h4>
              <p>{chapter.description}</p>
              {/* Display topics if they are part of chapter structure */}
              {chapter.topics && chapter.topics.length > 0 && (
                <div className="pl-4">
                  {chapter.topics.map((topic, i) => (
                    <div key={i}>
                      <p><strong>Topic Title:</strong> {topic.title}</p>
                      <p><strong>Topic Description:</strong> {topic.description}</p>
                      <p><strong>Content:</strong> {topic.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Confirm Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Confirm Course
      </button>
    </div>
  );
};

export default CourseConfirmation;
