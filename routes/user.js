import { Router } from 'express'
import {
	getOperationsUser,
	createUser,
	loginUser,
} from '../controllers/user.controller.js'
import { authToken } from '../auth/index.js'

const router = Router()

router.get('/operations',authToken, getOperationsUser)
router.post('/register', createUser)
router.post('/login', loginUser)

export default router
