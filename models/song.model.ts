import mongoose from "mongoose";

const songSchema = new mongoose.Schema(
  {
    title: String,
    singerID: String,
    topicId: String,
    albumID: String,
    desciption: String,
    audioUrl: String,
    lyrics: String,
    transcipt: String,
    genre: String,
    status: String,
    likes: Number,
    thumbnail: String,
    duration: String,
    plays: Number,
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

const Song = mongoose.model("Songs", songSchema, "songs");

export default Song;
