import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    title: String,
    desciption: String,
    thumbnail: String,
    status: String,
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

const Topic = mongoose.model("Topics", topicSchema, "topics");

export default Topic;
