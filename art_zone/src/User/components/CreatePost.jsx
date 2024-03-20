import React, { useState } from 'react';

const CreatePost = ({ onPost }) => {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setPostImage(imageFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onPost function passed from the parent component
    onPost(postText, postImage);
    // Reset the postText and postImage state after posting
    setPostText('');
    setPostImage(null);
  };

  return (
    <div className="bg-gray-100 p-4">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full bg-white border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:ring focus:border-blue-500"
          placeholder="What's on your mind?"
          value={postText}
          onChange={handlePostChange}
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-2"
        />
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Post
          </button>
          {/* Add like and comment buttons if needed */}
          {/* <div>
              <button>Like</button>
              <button>Comment</button>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
