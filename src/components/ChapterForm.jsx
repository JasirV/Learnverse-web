import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import {reset} from '../store/courseSlice';
import handleFileUpload from '../utils/handleFileUpload';
import api from '../api/axiosInterceptor';


const ChapterForm = ({ setStep }) => {
  const dispatch = useDispatch();
  const courseId = useSelector((state) => state.course.courseId); 

  const [chapter, setChapter] = useState({
    title: '',
    description: '',
    topics: [{ title: '', content: '', attachments: null }]
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChapterFieldChange = (field, value) => {
    setChapter({ ...chapter, [field]: value });
  };

  const handleTopicFieldChange = (index, field, value) => {
    const updatedTopics = chapter.topics.map((topic, i) =>
      i === index ? { ...topic, [field]: value } : topic
    );
    setChapter({ ...chapter, topics: updatedTopics });
  };

  const handleAddTopic = () => {
    setChapter({
      ...chapter,
      topics: [...chapter.topics, { title: '', content: '', attachments: null }]
    });
  };

  const handleRemoveTopic = (index) => {
    setChapter({
      ...chapter,
      topics: chapter.topics.filter((_, i) => i !== index)
    });
  };

  const handleAttachmentChange = async (index, file) => {
    if (file && !file.type.startsWith('image/')) {
      setErrorMessage('Only image files are allowed.');
      return;
    }
    try {
      setErrorMessage('');
      const uploadedUrl = await handleFileUpload(file);
      handleTopicFieldChange(index, 'attachments', uploadedUrl);
    } catch (error) {
      setErrorMessage('Error uploading image. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Step 1: Create Chapter
      const chapterResponse = await api.post(`/chapters/${courseId}`, {
        title: chapter.title,
        description: chapter.description
      });
      const newChapterId = chapterResponse.data.chapter._id;

      // Step 2: Create Topics for the Chapter
      for (const topic of chapter.topics) {
        const topicResponse = await api.post(`/topicrouter/${newChapterId}`, {
          title: topic.title,
          description: topic.description,
          content: topic.content,
          attachments: topic.attachments
        });
        console.log('Topic created:', topicResponse.data);
      }

      // Clear state and move to the next step
      dispatch(reset());
      setStep(2);

    } catch (error) {
      console.error('Error creating chapter or topics:', error.response?.data || error.message);
      setErrorMessage('An error occurred while creating the chapter or topics.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create Chapter</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Chapter Title</label>
        <input
          type="text"
          value={chapter.title}
          onChange={(e) => handleChapterFieldChange('title', e.target.value)}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          required
        />
      </div>

      <h3 className="text-md font-semibold mt-4 mb-2">Topics</h3>
      {chapter.topics.map((topic, index) => (
        <div key={index} className="border p-3 rounded mb-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Topic {index + 1}</span>
            {chapter.topics.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveTopic(index)}
                className="text-red-500"
              >
                Remove
              </button>
            )}
          </div>
          <div className="mb-2">
            <label className="block text-sm">Topic Title</label>
            <input
              type="text"
              value={topic.title}
              onChange={(e) => handleTopicFieldChange(index, 'title', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm">Description</label>
            <textarea
              value={topic.description}
              onChange={(e) => handleTopicFieldChange(index, 'description', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm">Content</label>
            <textarea
              value={topic.content}
              onChange={(e) => handleTopicFieldChange(index, 'content', e.target.value)}
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Attachments (Images Only)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleAttachmentChange(index, e.target.files[0])}
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddTopic}
        className="mt-2 flex items-center text-blue-500"
      >
        <FaPlus className="mr-2" /> Add Topic
      </button>

      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
        disabled={isLoading}
      >
        {isLoading ? 'Saving...' : 'Save Chapter'}
      </button>
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
    </div>
  );
};

export default ChapterForm;
