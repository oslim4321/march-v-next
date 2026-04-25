'use client'

import { GET_BLOG } from "@/graphql/queries/blog"
import { useQuery } from "@apollo/client/react"
import { useParams } from "next/navigation"
import DeleteBlogComp from "./DeleteBlogComp";


type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

type GetBlogsResponse = {
  blog: Blog;
};


const SingleBlogPage = () => {

    const {id}  = useParams()

   const { data, loading, error } = useQuery<GetBlogsResponse>(GET_BLOG, {
    variables: { id },
    skip: !id, // prevent running before id is ready
  })

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>Error loading blog: {error.message}</p>
  }

  const blog = data?.blog


  console.log(blog)

    return(
        <div>
                <h1>{blog?.title}</h1>
                <p>{blog?.content}</p>
                <p>Author: {blog?.author}</p>
                <p>Likes: {blog?.likes}</p>
                <p>Created At: {blog?.createdAt}</p>
                <p>Updated At: {blog?.updatedAt}</p>

            <DeleteBlogComp/>
            </div>
    )

}

export default SingleBlogPage