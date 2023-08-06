import CourseUsers from "../mongodb/models/courseUsers.js";
import CourseModel from "../mongodb/models/coursemodel.js";
import Comment from "../mongodb/models/chatmodel.js";
export const createUser = async (req, res) => {
  try {
    const newUser = await CourseUsers.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user." });
  }
};


export const getAllUsers = async (req, res) => {
  try {
    const users = await CourseUsers.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users." });
  }
};

export const createCourse = async (req, res) => {
  const formData = req.body;

  const newCourse = new CourseModel(formData);

  try {
    const savedCourse = await newCourse.save();
    console.log("Course saved successfully:", savedCourse);
    return res.status(201).json(savedCourse);
  } catch (error) {
    console.error("Error saving course:", error);
    return res.status(500).json({ error: "Failed to save course" });
  }
};

export const getAllCourses = (req, res) => {
  CourseModel.find({})
    .then((courses) => {
      return res.status(200).json(courses);
    })
    .catch((err) => {
      console.error("Error retrieving courses:", err);
      return res.status(500).json({ error: "Failed to retrieve courses" });
    });
};

// export const addComment = async (req, res) => {
//   const { _id, name, profilePic, comment } = req.body;

//   if (!_id || !name || !profilePic || !comment) {
//     return res.status(400).json({ error: "Missing required fields" });
//   }

//   const newComment = new Comment({
//     _id,
//     name,
//     profilePic,
//     comment,
//     replies: [],
//   });

//   try {
//     const savedComment = await newComment.save();
//     res.status(201).json(savedComment);
//   } catch (error) {
//     res.status(500).json({ error: "Error adding comment" });
//   }
// };

export const addComment = async (req, res) => {
  try {
    const { name, profilePic, comment, replies } = req.body;

    const newComment = new Comment({
      _id: Math.floor(Math.random() * 1000),
      name,
      profilePic,
      comment,
      replies,
    });
    await newComment.save();

    res
      .status(201)
      .json({ message: "Comment inserted successfully.", comment: newComment });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error inserting comment.", errorMessage: err.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();

    res.status(200).json({ comments });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching comments.", errorMessage: err.message });
  }
};
