import React from "react";
import { connect } from 'react-redux';

const BlogDetails = ({ blog }) => {
  if (!blog) {
    return (
      <h2> Sorry. Blog doesn't exist </h2>
    );
  } else {
    return (
      <div>
      <h3> {blog.name} </h3>
      <p>{blog.description}</p>
      <hr />
      <h4>{blog.status}</h4>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.blogId;
  return {
    blog: state.blogData.find(p => p.id === Number(id))
  }
}

export default connect(mapStateToProps)(BlogDetails);
