import mongoose from "mongoose";

const singerSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    desciption: String,
    status: String,
    songs: Array,
    followers: Number,
    listeners: Number,
    thumbSinger: Array,
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

const Singer = mongoose.model("Singers", singerSchema, "singers");

export default Singer;
