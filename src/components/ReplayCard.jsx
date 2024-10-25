import NoProfile from '../assets/images/LoginImg.jpg';
import moment from 'moment';

const ReplayCard = () => {
  return (
    <div className="w-full py-3">
      <div className="flex gap-3 items-center mb-1">
        <div>
          <img src={NoProfile} alt="User Name" className="w-10 h-10 rounded-full object-cover" />
        </div>
        <div>
          <p className="font-medium text-base text-ascent-1">Jane Smith</p>
          <span className="text-ascent-2 text-sm">{moment().fromNow()}</span>
        </div>
      </div>
      <div className="ml-12">
        <p className="text-ascent-2">This is a sample reply to the comment. It shows what the user replied.</p>
        <div className="mt-2 flex gap-6">
          {/* Add reply/like buttons here if necessary */}
        </div>
      </div>
    </div>
  );
};

export default ReplayCard;
