const mongoose = require('mongoose');

// Define the schema for the replies
const replySchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true }
});

// Define the main schema for the art object
const userCommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  replies: [replySchema]
});

// Create the Mongoose model based on the schema
const commentModel = mongoose.model('UserComments', userCommentSchema);

export default commentModel
