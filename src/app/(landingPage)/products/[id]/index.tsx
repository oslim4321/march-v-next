'use client'

import { useParams } from "next/navigation"

const SingleProduct = ()=>{
    const {id} = useParams()
    

    return(
        <div>
            <h1>SingleProduct Page</h1>
            <p>THis is retrive from the client {id}</p>
        </div>
    )

}

export default SingleProduct