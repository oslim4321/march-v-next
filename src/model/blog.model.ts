import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
}, { timestamps: true });

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;