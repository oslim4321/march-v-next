'use client'

import { GET_BLOGS } from "@/graphql/queries/blog";
import { useQuery } from "@apollo/client/react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  createdAt: string;
  updatedAt: string;
};

type GetBlogsResponse = {
  blogs: Blog[];
};

const Blogs = () => {
  const { loading, error, data } = useQuery<GetBlogsResponse>(GET_BLOGS);

  console.log(data)
  if (loading) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-slate-600">Loading blogs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
          <p className="font-medium text-red-700">Failed to load blogs</p>
          <p className="mt-1 text-sm text-red-600">{error.message}</p>
        </div>
      </section>
    );
  }

  const blogs = data?.blogs ?? [];

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Latest Blogs</h1>
        <p className="mt-2 text-slate-600">Read posts from our community.</p>
      </div>

      {blogs.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-slate-600">No blogs found.</p>
        </div>
      ) : (
        <div className="grid gap-5">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
             <Link href={`/blogs/${blog.id}`} className="text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                <h2 className="text-xl font-semibold text-slate-900">{blog.title}</h2>
             </Link>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {blog.likes} likes
                </span>
              </div>

              <p className="text-slate-700">{blog.content}</p>

              <div className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-800">Author:</span> {blog.author}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Created:</span>{" "}
                  {new Date(blog.createdAt).toLocaleString()}
                </p>
                <p>
                  <span className="font-medium text-slate-800">Updated:</span>{" "}
                  {new Date(blog.updatedAt).toLocaleString()}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blogs;