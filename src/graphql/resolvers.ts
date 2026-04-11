const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" }
]

const blogs = [
    { id: 1, title: "First Blog Post", content: "This is the content of the first blog post." },
    { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post." }
]

export const resolvers = {
    Query:{
        hello: () => "Hello, world!",
        users: () => users,
        user: (_: any, args) => {
            const user = users.find(user => user.id === parseInt(args.id))
            return user || null
        },

        blogs: ()=>{
            return blogs
        },
        blog: (_: any, args) => {
            const blog = blogs.find(blog => blog.id === parseInt(args.id))
            return blog || null
        }
    }



}
