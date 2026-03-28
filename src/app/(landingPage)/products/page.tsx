import Products from ".";

const page = async() => {

    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()

    console.log(products)
 // in a server component u cant use usestate effect event handlers




    return(

        <div>
        {/* 
            {

                products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                ))
            } */}

            {/* this is a client component  */}
            {/* it is possible to import client component in a server component */}
            {/* but it is not possible to do the vise versa */}
            <Products
             products={products} 
             greetings="Hello, welcome to our products page!"
              />
        </div>

    )
}

export default page;