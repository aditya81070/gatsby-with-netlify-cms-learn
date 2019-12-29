exports.createPages = async ({ graphql, reporter, actions }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            path
          }
          excerpt
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("error creating pages", result.errors)
  }
  const blogs = result.data.allMdx.nodes
  blogs.forEach(blog => {
    actions.createPage({
      path: blog.frontmatter.path,
      component: require.resolve("./src/templates/blogTemplate.js"),
      context: {
        slug: blog.frontmatter.path,
      },
    })
  })
}
