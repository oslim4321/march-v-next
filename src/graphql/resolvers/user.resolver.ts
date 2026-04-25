import User from "@/model/user.model"
import { connectDB } from "@/utils/connect"

export const userResolver = {
    Query: {
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
    }
}