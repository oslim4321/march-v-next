import Blog from "@/model/blog.model"
import { connectDB } from "@/utils/connect"


export const blogResolvers = {

    Query: {
        blogs: async () => {
            try {
                console.log('request hit me ')
                await connectDB()
                const blogs = await Blog.find()
                return blogs
            } catch (error) {
                console.error(error)
                throw new Error("Failed to fetch blogs")
            }

        },
        blog: async (_: any, args: { id: string }) => {
            try {
                await connectDB()
                const blog = await Blog.findById(args.id)
                return blog || null

            } catch (error) {
                console.error(error)
                throw new Error("Failed to fetch blog")

            }
        }
    },

    Mutation:{

        createBlog: async (_: any, args: { title: string, content: string, author: string }) => {
            try {
                await connectDB()
                const newBlog = await Blog.create({
                    title: args.title,
                    content: args.content,
                    author: args.author
                })
                return newBlog
            } catch (error) {
                console.error(error)
                throw new Error("Failed to create blog")
            }
        },

        updateBlog: async (_: any, args: { id: string, title?: string, content?: string, author?: string, likes?: number }) => {
            try {
                await connectDB()
                const updatedBlog = await Blog.findByIdAndUpdate(
                    args.id,
                    { title: args.title, content: args.content, author: args.author, likes: args.likes },
                    { new: true }
                )
                return updatedBlog || null
            } catch (error) {
                console.error(error)
                throw new Error("Failed to update blog")
            }
        },

        deleteBlog: async (_: any, args: { id: string }) => {
            try {
                await connectDB()
                const deletedBlog = await Blog.findByIdAndDelete(args.id)
                return deletedBlog || null
            } catch (error) {
                console.error(error)
                throw new Error("Failed to delete blog")
            }
        }




    }

}