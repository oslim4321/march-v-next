'use client'

import { useEffect, useState } from "react"

type Product = {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const ProductClient = () => {
  const [products, setProducts] = useState<Product[]>([])

  async function getProducts() {
    try {
      const data = await fetch('https://fakestoreapi.com/products')
      const products = await data.json()
      setProducts(products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Products
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Browse items from Fake Store API.
            </p>
          </div>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
            {products.length ? `${products.length} items` : 'Loading...'}
          </span>
        </header>

        {!products.length ? (
          <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-white">
            <p className="text-sm text-slate-500">Fetching products, please wait...</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-4 transition group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="line-clamp-1 text-lg font-semibold text-slate-900 group-hover:text-sky-600">
                    {product.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-500">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-700">
                      {product.category}
                    </span>

                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="font-medium text-slate-800">
                        {product.rating?.rate?.toFixed(1)}
                      </span>
                      <span className="text-xs text-slate-400">
                        ({product.rating?.count})
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xl font-semibold text-slate-900">
                      ${product.price.toFixed(2)}
                    </p>
                    <button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductClient