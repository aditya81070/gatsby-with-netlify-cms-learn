import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        path
        title
        date
      }
      body
    }
  }
`
const blogTemplate = ({ data: { mdx: blog } }) => {
  return (
    <>
      <h1>{blog.frontmatter.title}</h1>
      <small>
        Created at: {new Date(blog.frontmatter.date).toDateString()}
      </small>
      <MDXRenderer>{blog.body}</MDXRenderer>
      <Link to="/">&larr; Go to all blogs</Link>
    </>
  )
}

export default blogTemplate
