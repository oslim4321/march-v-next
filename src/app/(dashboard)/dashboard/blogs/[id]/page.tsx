import axios from "axios"
import DeleteBlog from "./component/DeleteBlog"

type paramsType = Promise<{id: string}>




const page = async ({params}: {params: paramsType}) => {
    const id =  (await (params)).id

    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${id}`)
    console.log(data)

    return (
        <div>
           {
            data.blog ? (
                <div>
                    <h1>{data.blog.title}</h1>
                    <p>{data.blog.content}</p>
                    <p>Author: {data.blog.author}</p>
                    <p>Likes: {data.blog.likes}</p>
                </div>
            ) : (
                <p>Blog not found</p>
            )
           }
           <DeleteBlog id={id} />
        </div> 
    )

}

export default page