import NoProfile from '../assets/images/LoginImg.jpg';

const CommentForm = () => {
  return (
    <form className="w-full border-b border-[#66666645]">
      <div className="w-full flex items-center gap-2 py-4">
        <img src={NoProfile} alt="UserImage" className="w-10 h-10 rounded-full object-cover" />
        <input
          name="comment"
          className="w-full rounded-full px-3 bg-secondary bg-opacity-25 py-3"
          placeholder="Comment this Post"
        />
      </div>
      <div className="flex items-end justify-end pb-2">
        <button type="submit" className="bg-[#0444a4] text-white py-1 px-3 rounded-full font-semibold text-sm">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
