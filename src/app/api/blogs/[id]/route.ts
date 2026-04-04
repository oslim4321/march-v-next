import { NextResponse } from "next/server"
import { connectDB } from "@/utils/connect"
import Blog from "@/model/blog.model"


type ParamsType = {
    params: Promise<{
        id: string
    }>
}


export const GET = async (request: Request, { params }: ParamsType) => {

    const id = (await (params)).id

    try {
        await connectDB()
        const blog = await Blog.findById(id)
        if (!blog) {
            return NextResponse.json({ message: `Blog with id ${id} not found` }, { status: 404 })
        }
        return NextResponse.json({ blog })

    } catch (error) {
        console.error("Error fetching blog:", error)
        return NextResponse.json({ error: "Failed to fetch blog" })

    }
}


export const PATCH = async (request: Request, { params }: ParamsType) => {
    const id = (await params).id  // id of the blog to update
    const body = await request.json() // the new updated data for the blog

    try {
        await connectDB()
        const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true })
        if (!updatedBlog) {
            return NextResponse.json({ message: `Blog with id ${id} not found` }, { status: 404 })
        }
        return NextResponse.json({ message: "Blog updated successfully!", blog: updatedBlog })

    } catch (error) {
        console.error("Error updating blog:", error)
        return NextResponse.json({ error: "Failed to update blog" })
    }
}




export const DELETE = async (request: Request, { params }: ParamsType) => {
    const id = (await params).id
    try {
        await connectDB()
        const deletedBlog = await Blog.findByIdAndDelete(id)
        if (!deletedBlog) {
            return NextResponse.json({ message: `Blog with id ${id} not found` }, { status: 404 })
        }
        return NextResponse.json({ message: "Blog deleted successfully!" })
    } catch (error) {
        console.error("Error deleting blog:", error)
        return NextResponse.json({ error: "Failed to delete blog" })
    }
}


