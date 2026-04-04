'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState, FormEvent, ChangeEvent } from 'react'

type BlogForm = {
    title: string
    content: string
    likes: number,
    author: string
}

const CreateBlog = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState<BlogForm>({
        title: '',
        content: '',
        likes: 0,
        author: '',
    })

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: name === 'likes' ? Number(value) || 0 : value,
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        console.log(form, 'form')
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post('/api/blogs', form)
            console.log(response)
            alert('Blog created successfully!')
            router.push('/dashboard/blogs')

        } catch (error) {
            console.log(error)
            alert('An error occurred while creating the blog. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mx-auto max-w-xl p-6">
            <h1 className="mb-4 text-2xl font-semibold">Create Blog</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm font-medium">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Enter blog title"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="author" className="text-sm font-medium">
                        Author
                    </label>
                    <input
                        id="author"
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Author name"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="content" className="text-sm font-medium">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        rows={4}
                        className="rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Write your blog content..."
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="likes" className="text-sm font-medium">
                        Likes
                    </label>
                    <input
                        id="likes"
                        name="likes"
                        type="number"
                        min={0}
                        value={form.likes}
                        onChange={handleChange}
                        className="w-32 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}
export default CreateBlog