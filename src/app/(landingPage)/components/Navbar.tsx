import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full bg-white/80 backdrop-blur-sm shadow sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <a href="/" className="text-2xl font-semibold text-blue-500">Brand</a>

                    <ul className="hidden md:flex items-center space-x-6">
                        <li><Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link></li>
                        <li><Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link></li>
                        <li><Link href="/blogs" className="text-gray-700 hover:text-indigo-600 transition-colors">Blogs</Link></li>
                    </ul>

                    <div className="md:hidden">
                        <button aria-label="Open menu" className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;