import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import { connect } from 'react-redux';

const Blog = (props) => {          
    const { path, url } = useRouteMatch();
    const { blogData } = props;
    const linkList = blogData.map((blog) => {
        return (
          <li key={blog.id}>
            <Link to={`${url}/${blog.id}`}>{blog.name}</Link>
          </li>
        );
    });

    return (
        <div>
            <div>
                <h3>My Blogs</h3>
                <ul>{linkList}</ul>
            </div>
            <Route exact path={path}>
              <p>Please select a product.</p>
            </Route>
            <Route path={`${path}/:blogId`}>
              <BlogDetails data={blogData} />
            </Route>
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
    blogData: state.blogData
  }
}

export default connect(mapStateToProps)(Blog);