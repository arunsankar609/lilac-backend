import mongoose from "mongoose";


const replySchema = new mongoose.Schema({
  _id: Number,
  name: String,
  profilePic: String,
  message: String,
});


const commentSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  profilePic: String,
  comment: String,
  replies: [replySchema], 
});


const Comment = mongoose.model('Comment', commentSchema);

export default Comment
