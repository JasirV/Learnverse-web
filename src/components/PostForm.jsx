import React from 'react'
import { BiImages, BiSolidVideo } from "react-icons/bi";
import { BsFiletypeGif} from "react-icons/bs";

const PostForm = () => {
  return (
    <div>
        <form className="shadow-md bg-white px-4 rounded-lg">
  <div className="w-full flex items-center gap-2 py-4 border-b border-[#66666645]">
    <img
      src="/path/to/user-profile-pic.png"
      alt="UserImage"
      className="w-14 h-14 rounded-full object-cover"
    />
    <input
      className="w-full rounded-full py-1 p-0 2xl:p-3 bg-faint-pink bg-opacity-20  outline-none text-sm font-light px-3 placeholder:text-[#666]"
      placeholder="What's on your mind..."
    />
  </div>
  <div className="flex items-center justify-between py-4">
    {/* Image Upload */}
    <label className="flex items-center gap-1 text-base text-ascent-2 cursor-pointer">
      <BiImages />
      <span>Image</span>
      <input type="file" className="hidden" />
    </label>

    {/* Video Upload */}
    <label className="flex items-center gap-1 text-base text-ascent-2 cursor-pointer">
      <BiSolidVideo />
      <span>Video</span>
      <input type="file" className="hidden" />
    </label>

    {/* GIF Upload */}
    <label className="flex items-center gap-1 text-base text-ascent-2 cursor-pointer">
      <BsFiletypeGif />
      <span>Gif</span>
      <input type="file" className="hidden" />
    </label>

    {/* Post Button */}
    <button className="bg-[#0444a4] text-white py-1 px-6 rounded-full font-semibold text-sm">
      Post
    </button>
  </div>
</form>
    </div>
  )
}

export default PostForm