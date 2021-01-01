import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function Blog() {
    const blogData = [
      {
        id: 1,
        name: "NIKE Liteforce Blue Sneakers",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
        status: "Available",
      },
      {
        id: 2,
        name: "Stylised Flip Flops and Slippers",
        description:
          "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
        status: "Out of Stock",
      },
      {
        id: 3,
        name: "ADIDAS Adispree Running Shoes",
        description:
          "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
        status: "Available",
      },
      {
        id: 4,
        name: "ADIDAS Mid Sneakers",
        description:
          "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
        status: "Out of Stock",
      },
    ];
          
    const { path, url } = useRouteMatch();
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
}

export default Blog;