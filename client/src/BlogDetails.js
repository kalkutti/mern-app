import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({ data }) => {
  const { blogId } = useParams();
  const blog = data.find(p => p.id === Number(blogId));
  let blogData;

  if (blog) {
    blogData = (
      <div>
        <h3> {blog.name} </h3>
        <p>{blog.description}</p>
        <hr />
        <h4>{blog.status}</h4>
      </div>
    );
  } else {
    blogData = <h2> Sorry. Blog doesn't exist </h2>;
  }

  return (
    <div>
      <div>{blogData}</div>
    </div>
  );
};

export default BlogDetails;
