import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl:{
    type: String,
    required: false,
    default:"" 
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  degree: {
    type: String,
    required: true
  },
  statusOfDoc: {
    type: String,
    required: true
  },
  needToEdit: {
    type: Boolean,
    default: false
  }
});

const CourseUsers = mongoose.model('CourseUsers', userSchema);
export default CourseUsers

