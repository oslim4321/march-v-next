import { NextResponse } from "next/server"
import { blogList } from "../data"


type ParamsType = {
params: Promise<{
    id: string
  }>
}


export const GET = async(request: Request, {params}: ParamsType)=>{

    const id =  (await (params)).id

    const blog = blogList.find((b) => b.id === Number(id))
    
    if(!blog){
        return NextResponse.json({message: `Blog with id ${id} not found`}, {status: 404})
    }

    return NextResponse.json({blog})
}


// do the update
export const PATCH = async(request: Request, {params}: ParamsType)=>{
    const id = (await params).id
    return NextResponse.json({message: `This is PATCH request for blogs api route with id ${id}`})
}

// do the delete 

export const DELETE = async(request: Request, {params}: ParamsType)=>{
    const id = (await params).id
    return NextResponse.json({message: `This is DELETE request for blogs api route with id ${id}`})
}