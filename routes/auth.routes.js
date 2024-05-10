import { Router } from 'express'
import { login, logout, register, profile } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js';
const router = Router()
import { validateSchema } from '../middlewares/validator.middleware.js';
import { loginSchema } from '../schemas/auth.schema.js';
import { registerSchema } from '../schemas/auth.schema.js';

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get("/profile", authRequired, profile)
export default router;