import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    publicPlaylist: String,
    followers: Number,
    following: Array, // list id singer or publisher
    about: String,
    avatar: String,
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    thumbnail: String,
    token: String,
    password: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
    createdAt: {
      type: Date,
      default: new Date(),
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

export default User;
