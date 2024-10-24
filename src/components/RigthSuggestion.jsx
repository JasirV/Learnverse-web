import React, { useEffect, useState } from 'react';
import NoProfile from '../assets/images/LoginImg.jpg';

const RightSuggestion = ({ users }) => {
  const [fetchedUsers, setFetchedUsers] = useState(users || []);

  // Optional: If you need to fetch users from an API, you can do so here
  useEffect(() => {
    if (!users) {
      // Fetch the data from an API and set it in the state
      // Example: setFetchedUsers(fetchedUsersFromAPI);
    }
  }, [users]);

  return (
    <div className="hidden w-full lg:w-full h-full md:flex flex-col p-5 bg-white rounded-lg  gap-3 overflow-y-auto">
      <div className="flex items-center text-xl text-ascente-1 pb-2 mt-2 border-b border-[#66666645]">
        <span>Users</span>
      </div>
      <div className="w-full flex flex-col gap-5 pt-4">
        {fetchedUsers?.length > 0 ? (
          fetchedUsers.map((user, index) => (
            <div key={index || user._id} className="flex items-center justify-between">
              <div className="w-full flex gap-4 items-center cursor-pointer">
                <img
                  src={user?.profile_pic || NoProfile}
                  alt={user?.first_name}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex-1">
                  <p className="text-base font-medium text-ascent-1">
                    {`${user?.first_name} ${user?.last_name}`}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No users available.</p>
        )}
      </div>
    </div>
  );
};

export default RightSuggestion;
