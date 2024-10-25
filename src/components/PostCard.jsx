import { useState } from "react";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { MdDeleteOutline } from 'react-icons/md';
import NoProfile from '../assets/images/LoginImg.jpg';
import moment from 'moment';
import CommentForm from './CommentForm'; 
import ReplayCard from './ReplayCard'; 

const PostCard = ({ post, user }) => {
  const [comments, setComments] = useState([]); // Example state for comments
  const [showComments, setShowComments] = useState(false); // Control comment visibility

  const getComments = async () => {
    // Function to fetch comments from backend
    // You can replace this with your API call to get the comments for the post
    const fetchedComments = [
      { id: 1, user_id: user[0], comment: "This is a sample comment." },
      { id: 2, user_id: user[0], comment: "Another sample comment." }
    ];
    setComments(fetchedComments);
  };

  return (
    <div className="mb-2 bg-white shadow-sm p-4 rounded-xl">
      <div className="flex gap-3 items-center mb-2">
        <div>
          <img src={NoProfile} alt="User Name" className="w-14 h-12 rounded-full" />
        </div>
        <div className="w-full flex justify-between">
          <div>
            <p className="font-medium text-lg text-ascent-1">John Doe</p>
          </div>
          <span>{moment(post.id).fromNow()}</span>
        </div>
      </div>
      <div>
        <p className="text-ascent-2">{post.description}</p>
        <img src={post.imageUrl || "https://via.placeholder.com/400"} alt="postImage" className="w-full mt-2 rounded-lg" />
      </div>
      <div className="mt-4 flex justify-between items-center px-3 py-2 text-ascent-2 text-base border-t border-[#66666645]">
        <p className="flex gap-2 items-center text-base cursor-pointer">
          <BiLike size={20} /> 10 Likes
        </p>
        <p
          className="flex gap-2 items-center text-base cursor-pointer"
          onClick={() => {
            setShowComments(!showComments);
            if (!showComments) getComments();
          }}
        >
          <BiComment size={20} /> {comments.length} Comments
        </p>
        <div className="flex gap-1 items-center text-base text-ascent-1 cursor-pointer">
          <MdDeleteOutline size={20} />
          <span>Delete</span>
        </div>
      </div>

      {/* COMMENTS SECTION */}
      {showComments && (
        <div className="w-full mt-4 border-t border-[#66666646]">
          {/* Comment Form */}
          <CommentForm
            user={user}
            postId={post.id}
            replayAt={null} // Pass null for new comments, modify for replies
            getComments={getComments}
          />
          
          {/* Display list of comments */}
          {comments.length > 0 ? (
            comments.map((reply) => (
              <ReplayCard
                key={reply.id}
                reply={reply}
                user={user}
                handleLike={() => {}}
              />
            ))
          ) : (
            <span className="flex text-sm py-4 text-ascent-2 text-center">No Comments, be first to comment</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCard;
