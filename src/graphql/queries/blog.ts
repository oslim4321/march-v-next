import gql from "graphql-tag";

export const GET_BLOGS = gql`
    query GetBlogs {
        blogs {
            id
            title
            content
            author
            likes
            createdAt
            updatedAt
        }
    }

`

export const GET_BLOG = gql`
    query GetBlog($id: ID!) {
        blog(id: $id) {
            id
            title
            content
            author
            likes
            createdAt
            updatedAt
        }
    }
`