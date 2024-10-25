import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChapter } from '../store/courseSlice';
import { FaPlus } from 'react-icons/fa';

const ChapterForm = ({ setStep }) => {
  const dispatch = useDispatch();
  
  const [chapter, setChapter] = useState({
    title: '',
    topics: [{ title: '', description: '', content: '', attachments: null }]
  });

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
      topics: [...chapter.topics, { title: '', description: '', content: '', attachments: null }]
    });
  };

  const handleRemoveTopic = (index) => {
    setChapter({
      ...chapter,
      topics: chapter.topics.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addChapter(chapter));
    setStep(2)
    setChapter({ title: '', topics: [{ title: '', description: '', content: '', attachments: null }] });
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create Chapter</h2>

      {/* Chapter Title */}
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

      {/* Topics */}
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
            <label className="block text-sm">Attachments</label>
            <input
              type="file"
              onChange={(e) =>
                handleTopicFieldChange(index, 'attachments', e.target.files[0])
              }
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
        </div>
      ))}

      {/* Add Topic Button */}
      <button
        type="button"
        onClick={handleAddTopic}
        className="mt-2 flex items-center text-blue-500"
      >
        <FaPlus className="mr-2" /> Add Topic
      </button>

      {/* Submit Chapter Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Save Chapter
      </button>
    </div>
  );
};

export default ChapterForm;
