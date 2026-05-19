import { validateRegisterInput,validateLoginInput } from "../middleware/validator-middleware.js";
import { Router } from "express";

const router = Router()
//import { validateRegister,validateLogin } from "../middleware/validator-middleware.js";
import {register,login,logout} from '../controllers/auth.js'
router.post('/register',validateRegisterInput,register)
router.post('/login',validateLoginInput,login)
router.get('/logout',logout)

export default router