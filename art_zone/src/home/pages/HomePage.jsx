import PostsList from "../components/PostsList";

const HomePage = () => {
  return (
    <div className="flex w-full">
      <div className="m-5 w-1/3">
        <div className=" bg-neutral-50 p-5 rounded">Friends List</div>
      </div>
      <div className="m-5 w-2/3">
        <PostsList />
      </div>
      <div className="m-5 w-1/3">
        <div className=" bg-neutral-50 p-5 rounded mb-8">Shop List</div>
        <div className=" bg-neutral-50 p-5 rounded">event list</div>
      </div>
    </div>
  );
};

export default HomePage;
