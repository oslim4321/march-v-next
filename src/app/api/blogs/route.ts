import { NextResponse } from "next/server"
import { blogList } from "./data"

export const GET = ()=>{
    return NextResponse.json(blogList)
}

export const POST = async(req: Request)=>{
    // Handle POST request logic here
    const body = await req.json()

    blogList.push(body)
    
    return NextResponse.json({message: "Blog post created successfully!", blog: body})
}