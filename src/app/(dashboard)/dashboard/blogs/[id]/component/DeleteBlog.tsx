'use client'

import axios from "axios"
import { useRouter } from "next/navigation"

export default function DeleteBlog({ id }: { id: string }) {
    const router = useRouter()

    async function handleDelete() {


        if (confirm("Are you sure you want to delete this blog?")) {
            try {
                const res = await axios.delete(`/api/blogs/${id}`)
                alert('Blog deleted successfully!')
                router.push('/dashboard/blogs')
            } catch (error) {
                alert('Failed to delete blog. Please try again.')
            }
        }
    }

    return (
        <div>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >
                Delete Blog
            </button>
        </div>
    )
}