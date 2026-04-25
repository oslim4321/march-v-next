'use client'

import { CREATE_BLOG } from '@/graphql/Mutation/blog'
import { GET_BLOGS } from '@/graphql/queries/blog'
import { useMutation } from '@apollo/client/react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

type BlogForm = {
    title: string
    content: string
    author: string
    likes: number
}

const CreateBlog = () => {

    const [createBlog] = useMutation(CREATE_BLOG,{
        refetchQueries:  [{ query: GET_BLOGS }], // Refetch the list of blogs after creating a new one
        onCompleted: () => {
            alert("Blog created successfully")
        },
        // onError: (error) => {
        //     console.error("Error creating blog:", error)
        // }
    })

    const navigate = useRouter()

    const [form, setForm] = useState<BlogForm>({
        title: '',
        content: '',
        author: '',
        likes: 0,
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

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        try {
            await createBlog({
                variables: {
                    ...form
                }
            })
            navigate.push('/blogs')
        } catch (error) {
            console.log("Failed to create blog:", error)
        }
    }

    return (
        <section className="mx-auto grid max-w-5xl gap-6 px-4 py-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h1 className="text-2xl font-semibold text-slate-900">Create Blog</h1>
                <p className="mt-1 text-sm text-slate-500">Fill in the fields below to collect blog values.</p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="mb-1 block text-sm font-medium text-slate-700">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Enter blog title"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="author" className="mb-1 block text-sm font-medium text-slate-700">
                            Author
                        </label>
                        <input
                            id="author"
                            name="author"
                            value={form.author}
                            onChange={handleChange}
                            placeholder="Enter author name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="mb-1 block text-sm font-medium text-slate-700">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Write your blog content..."
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="likes" className="mb-1 block text-sm font-medium text-slate-700">
                            Likes
                        </label>
                        <input
                            id="likes"
                            name="likes"
                            type="number"
                            min={0}
                            value={form.likes}
                            onChange={handleChange}
                            className="w-40 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                    </div>
                    <button type="submit" >
                        Create Blog
                    </button>

                </form>
            </div>


        </section>
    )
}

export default CreateBlog