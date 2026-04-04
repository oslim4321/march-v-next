'use client'

import { BlogType } from "@/type"
import Link from "next/link"



const Blog = ({ blogs }: { blogs: BlogType[] }) => {
    return (
        <div>
           <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Blogs Dashboard</h1>
                <Link href="/dashboard/blogs/create-blog">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Create New Blog
                </button>
                </Link>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                    <Link href={`/dashboard/blogs/${blog._id}`} key={blog._id} className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-gray-600 mb-4">{blog.content.substring(0, 100)}...</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                            <span>{blog.likes} Likes</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog