import { React } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* myBlogs - it is a prop */}
      {blogs && <BlogList myBlogs={blogs} myTitle="All Blogs!" />}
    </div>
  );
};

export default Home;
