'use client'

type ProductType = {
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

type Props = {
  products: ProductType[];
  greetings: string;
  handleNavigate: (name: string) => void;
}

const Products = ({ products, greetings, handleNavigate }: Props) => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Products
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Browse our latest collection.
            </p>
          </div>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
            {products.length} items
          </span>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image placeholder – swap for an <Image> later if you want */}
              {/* <div className="aspect-[4/3] w-full bg-slate-100" /> */}

              <img src={product.image} alt={product.title} className="aspect-[4/3] w-full object-cover" />

              <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-1 text-lg font-semibold text-slate-900 group-hover:text-sky-600">
                  {product.title}
                </h3>
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
                      {product.rating.rate.toFixed(1)}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({product.rating.count})
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-semibold text-slate-900">
                    ${product.price.toFixed(2)}
                  </p>
                  <button onClick={()=> alert('Hello')} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products