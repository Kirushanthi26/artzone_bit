import React from "react";
import PostItem from "./PostItem";
import { DUMMY_POST } from "../../shared/data/DummyPost";

const PostsList = () => {
  if (DUMMY_POST.length === 0) {
    return (
      <>
        <h2 className="text-2xl font-semibold font-title text-center text-red-600">No Posts Found...</h2>
      </>
    );
  }

  return (
    <div className="w-full">
      {DUMMY_POST.map((item) => (
        <PostItem
          key={item.id}
          id={item.id}
          userName={item.name}
          profileAvartar={item.profile_Avatar}
          dateTime={item.post_time_date}
          postDescription={item.post_description}
          artImg={item.art_details.art_img}
          artPrice={item.art_details.art_price}
        />
      ))}
    </div>
  );
};

export default PostsList;
