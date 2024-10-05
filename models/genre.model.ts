import mongoose from "mongoose";

const genreSchema = new mongoose.Schema(
  {
    title: String,
    desciption: String,
    thumbnail: String,
    status: String,
    author: String,
    categoryID: String,
    genre: String,
    songID: String,
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

const Genre = mongoose.model("Genres", genreSchema, "genres");

export default Genre;
