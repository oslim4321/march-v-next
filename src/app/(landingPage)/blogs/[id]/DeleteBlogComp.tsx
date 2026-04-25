import { DELETE_BLOG } from "@/graphql/Mutation/blog"
import { GET_BLOGS } from "@/graphql/queries/blog"
import { useMutation } from "@apollo/client/react"
import { useParams, useRouter } from "next/navigation"

const DeleteBlogComp = () => {
    const {id} = useParams()
    const navigate =  useRouter()


    const [deleteBlog] = useMutation(DELETE_BLOG, {
       refetchQueries: [{ query: GET_BLOGS }],
       onCompleted: () => {
        alert("Blog deleted successfully")
       },
       // onError: (error) => {
       //  console.error("Error deleting blog:", error)
       // }
    })



   async  function  handleDeleteBlog() {
        await deleteBlog({ variables: { id } })
        navigate.push('/blogs')

     }
    return(
        <button
            onClick={handleDeleteBlog}
        className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition-colors">Delete Blog</button>
    )

}

export default DeleteBlogComp