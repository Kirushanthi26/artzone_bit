import React from 'react';

const ProfileFriends = () => {
  return (
    <div className="bg-gray-100 p-4">
      {/* Render user's friends */}
      <h2 className="text-xl font-bold mb-2">Friends</h2>
      <ul>
        <li className="flex items-center mb-2">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Friend" className="w-8 h-8 rounded-full mr-2" />
          <span>Friend 1</span>
        </li>
        <li className="flex items-center mb-2">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Friend" className="w-8 h-8 rounded-full mr-2" />
          <span>Friend 2</span>
        </li>
        {/* Add more friends */}
      </ul>
    </div>
  );
};

export default ProfileFriends;
