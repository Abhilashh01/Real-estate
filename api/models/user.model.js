import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: { 
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true, 
    },
    avatar: {
      type: String,
      default: "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
