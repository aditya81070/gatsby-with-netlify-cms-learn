import React from "react"
import { Link } from "gatsby"
import useBlogs from "../hooks/use-blogs"
export default () => {
  const blogs = useBlogs()
  return (
    <div>
      <h1>Read latest blogs</h1>
      {blogs.map(blog => (
        <div key={blog.path}>
          <h2>
            <Link to={`/${blog.path}`}>{blog.title}</Link>
          </h2>
          <p>{blog.excerpt}</p>
          <Link to={`/${blog.path}`}>Read full blog &rarr;</Link>
        </div>
      ))}
    </div>
  )
}
