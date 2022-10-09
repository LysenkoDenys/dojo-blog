import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ myBlogs, myTitle }) => {
  // const blogs = props.myBlogs;
  // const title = props.myTitle;

  return (
    <div className="blog-list">
      <h2>{myTitle}</h2>
      {myBlogs.map((blog) => (
        <div className="blog-previw" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
