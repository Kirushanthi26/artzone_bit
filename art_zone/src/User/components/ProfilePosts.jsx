import React from "react";

const ProfilePosts = () => {
  const posts = [
    {
      id: "u1",
      name: "Kirushanthi",
      profile_Avatar:
        "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      post_time_date: "12.30 - 15/02/2024",
      post_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa? Consectetur dignissimos dolore reiciendis natus? Unde totam magni, eveniet adipisci, eos, officiis maxime nulla dolor incidunt deleniti libero sequi animi saepe ipsa earum veniam aut autem aperiam? Fuga alias modi molestiae distinctio consequuntur!",
      art_details: {
        art_price: "25,000",
        art_img:
          "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      id: "u2",
      name: "vithya",
      profile_Avatar:
        "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      post_time_date: "14.30 - 05/02/2024",
      post_description:
        "vithya_ Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa? Consectetur dignissimos dolore reiciendis natus? Unde totam magni, eveniet adipisci, eos, officiis maxime nulla dolor incidunt deleniti libero sequi animi saepe ipsa earum veniam aut autem aperiam? Fuga alias modi molestiae distinctio consequuntur!",
      art_details: {
        art_price: "15,360",
        art_img:
          "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];

  return (
    <div className="bg-gray-100 p-4">
      {/* Render user's posts */}
      {posts.map((post, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
          <p>{post.post_description}</p>
          <div className="flex">
            <div className="w-1/2">
              {post.art_details.art_img && (
                <img
                  src={post.art_details.art_img}
                  alt="Post"
                  className="mt-2 rounded-md"
                  style={{ maxWidth: "100%" }}
                />
              )}
              {/* Like and comment features */}
            </div>
            <div className="w-1/2 ml-8">
              <div className="flex justify-between mt-4">
                <button className="text-blue-500 hover:text-blue-700 focus:outline-none">
                  Like
                </button>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Add pagination or load more functionality */}
    </div>
  );
};

export default ProfilePosts;
