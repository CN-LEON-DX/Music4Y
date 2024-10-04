import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema(
  {
    title: String,
    singerID: String,
    topicId: String,
    author: String,
    desciption: String,
    lyrics: String,
    transcript: {
      type: String,
      default: "",
    },
    genre: String,
    status: String,
    likes: Number,
    thumbnail: String,
    duration: String,
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

const Podcast = mongoose.model("podcasts", podcastSchema, "podcasts");

export default Podcast;
