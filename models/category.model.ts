import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: String,
    desciption: String,
    thumbnail: String,
    status: String,
    topicID: String,
    genre: Array,
    slug: {
      type: String,
      unique: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("categories", categorySchema, "categories");

export default Category;
