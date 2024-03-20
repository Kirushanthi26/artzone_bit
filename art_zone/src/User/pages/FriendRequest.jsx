import React from 'react';

const FriendRequest = () => {
    const request = {
        profilePic: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"kiru"
    }
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex items-center">
        <img src={request.profilePic} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{request.name}</h2>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Accept
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none">
          Reject
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
