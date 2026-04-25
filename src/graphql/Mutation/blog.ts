import gql from "graphql-tag";



export const CREATE_BLOG = gql`
    mutation CreateBlog($title: String!, $content: String!, $author: String!) {
        createBlog(title: $title, content: $content, author: $author) {
            id
            title
            content
            author
            likes
            createdAt
            updatedAt
        }
}`

export const DELETE_BLOG = gql`
  mutation DeleteBlog($id: ID!) {
    deleteBlog(id: $id) {
      id
    }
  }
`