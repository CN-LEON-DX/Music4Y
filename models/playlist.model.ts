import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    title: String,
    desciption: String,
    thumbnail: String,
    status: String,
    author: String,
    categoryID: String,
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

const Playlist = mongoose.model("Playlist", playlistSchema, "playlist");

export default Playlist;
