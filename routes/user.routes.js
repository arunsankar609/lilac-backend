import express from "express";
import {
  createUser,
  getAllUsers,
  createCourse,
  getAllCourses,
  getComments,
  addComment,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/course-users", createUser);
router.get("/users", getAllUsers);
router.post("/courses", createCourse);
router.get("/getcourses", getAllCourses);
router.get("/getcomments", getComments);
router.post("/addcomment", addComment);
export default router;
