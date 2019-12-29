import { graphql, useStaticQuery } from "gatsby"

const useBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            date
            path
          }
          excerpt
        }
      }
    }
  `)
  if (data.errors) {
    console.error("error fetching blogs", data.errors)
    return
  }
  return data.allMdx.nodes.map(blog => {
    const { title, path, date } = blog.frontmatter
    const { excerpt } = blog
    return {
      title,
      path,
      excerpt,
      date,
    }
  })
}

export default useBlogs
