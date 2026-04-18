import Blog from "@/model/blog.model"
import User from "@/model/user.model"
import { connectDB } from "@/utils/connect"

export const resolvers = {
    Query: {
        hello: () => "Hello, world!",
        users: async () => {
            try {
                await connectDB()
                const users = await User.find()
                return users
            } catch (error) {
                console.error(error)
                throw new Error("Failed to fetch users")
            }
        },
        user: async (_: any, args: { id: string }) => {
            try {
                const user = await User.findById(args.id)
                return user || null
            } catch (error) {
                console.error(error)
                throw new Error("Failed to fetch user")

            }
        },

        blogs: async () => {
                try {
                    await connectDB()
                    const blogs = await Blog.find()
                    return blogs
                } catch(error) {
                    console.error(error)
                    throw new Error("Failed to fetch blogs")
                }
            
        },
        blog: async(_: any, args: { id: string }) => {
           try{
            await connectDB()
            const blog = await Blog.findById(args.id)
            return blog || null

           }catch(error) {
            console.error(error)
            throw new Error("Failed to fetch blog")

           }
        }
    },

    Mutation: {
        createUser: async (_: any, args: { name: string, email: string }) => {
            try {
                await connectDB()
                const newUser = await User.create({
                    name: args.name,
                    email: args.email
                })
                return newUser
            } catch (error) {
                console.error(error)
                throw new Error("Failed to create user")
            }
        },

        updateUser: async (_: any, args: { id: string, name?: string, email?: string }) => {
            try {
                await connectDB()
                const updatedUser = await User.findByIdAndUpdate(
                    args.id,
                    { name: args.name, email: args.email },
                    { new: true }
                )
                return updatedUser || null

            } catch (error) {
                console.error(error)
                throw new Error("Failed to update user")
            }
        },

        deleteUser: async (_: any, args: { id: string }) => {
            try {
                await connectDB()
                const deletedUser = await User.findByIdAndDelete(args.id)
                return deletedUser || null
            } catch (error) {
                console.error(error)
                throw new Error("Failed to delete user")

            }
        },
        // Blogs

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



// CRUD