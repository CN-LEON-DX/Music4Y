
import mongoose from "mongoose";

const postcardSchema = new mongoose.Schema(
  {
    title: String,
    singerID: String,
    topicId: String,
    albumID: String,
    desciption: String,
    lyrics: String,
    transcipt: String,
    genre: String,
    status: String,
    likes: Number, 
    thumbnail: String,
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

const Postcard = mongoose.model("Postcards", postcardSchema, "postcards");

export default Postcard;
