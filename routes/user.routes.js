import express from "express";
import {createUser, getAllUsers} from '../controllers/user.controller.js'
const router = express.Router();

router.post('/course-users', createUser);
router.get('/users', getAllUsers);

export default router;