import { NextResponse } from "next/server"
import Blog from "@/model/blog.model"
import { connectDB } from "@/utils/connect"

export const GET = async()=>{
    try {
        // Connect to the database and fetch blogs
        await connectDB()
        const blogs = await Blog.find()
        return NextResponse.json({blogs})
    } catch (error) {
        console.error("Error fetching blogs:", error)
        return NextResponse.json({error: "Failed to fetch blogs"})
    }

}

export const POST = async(req: Request)=>{
    try {
        await connectDB()
        const body = await req.json()
        const blog = await Blog.create(body)
        return NextResponse.json({message: "Blog post created successfully!", blog, status: 201})
    } catch (error) {
        console.error("Error creating blog:", error)
        return NextResponse.json({error: "Failed to create blog", status: 400})
        
    }
}