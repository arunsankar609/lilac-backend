import CourseUsers from "../mongodb/models/courseUsers.js";

export const createUser = async (req, res) => {
  try {
    const newUser = await CourseUsers.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user.' });
  }
};

// Controller for fetching all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await CourseUsers.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
};
