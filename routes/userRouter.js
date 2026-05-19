import { Router } from "express";
import { validateUpdate } from "../middleware/validator-middleware.js";
import { adminOnlyMiddleware } from "../middleware/adminMiddleware.js";
import upload from '../middleware/multerMiddleware.js'
const router = Router()
import {
    getCurrentUser,
    getAllUsers,
    updateUser
} from '../controllers/userController.js'
router.get('/current-user',getCurrentUser)
router.get('/all-users',getAllUsers)
router.patch('/update-user',upload.single('avatar'),validateUpdate,updateUser)


export default router