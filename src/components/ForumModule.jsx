import React, { useState } from 'react';

const ForumModule = () => {
  const [discussionTitle, setDiscussionTitle] = useState('');
  const [discussionContent, setDiscussionContent] = useState('');

  const handleDiscussionSubmit = (e) => {
    e.preventDefault();
    // Dispatch to create new discussion
  };

  return (
    <div className="w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Course Discussions</h2>
      <form onSubmit={handleDiscussionSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="discussionTitle"
            placeholder="Discussion Title"
            value={discussionTitle}
            onChange={(e) => setDiscussionTitle(e.target.value)}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="discussionContent"
            placeholder="Discussion Content"
            value={discussionContent}
            onChange={(e) => setDiscussionContent(e.target.value)}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Post Discussion
        </button>
      </form>

      {/* Existing discussions would be listed here */}
    </div>
  );
};

export default ForumModule;
