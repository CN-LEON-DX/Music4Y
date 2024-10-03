import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    thumbnail: String,
    status: String,
    author: String,
    slug: {
      type: String,
      unique: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
    views: Number,
    likes: Number,
    duration: String,
    tags: Array,
    genreID: String,
  },
  {
    timestamps: true,
  }
);

const Playlist = mongoose.model("Playlist", playlistSchema, "playlist");

export default Playlist;
