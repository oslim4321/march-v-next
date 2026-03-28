import SingleProduct from ".";

type paramsType = Promise<{id: string}>




const page = async ({params}: {params: paramsType}) => {
    const id =  (await (params)).id

    console.log(id);

    // send request to the backend to get the product details using the id
    

    return(
        <div>
            <h1>THis is retrive from the Server{id}</h1>

            <SingleProduct/>
        </div>
    )
}


export default page;