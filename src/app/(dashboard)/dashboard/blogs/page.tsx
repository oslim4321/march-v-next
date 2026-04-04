import axios from "axios"
import Blog from "."

const Page = async() => {
    // fetch this on the server side and pass it to the client component as props
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`)

    return (
        <Blog blogs={data.blogs} />
    )
}

export default Page