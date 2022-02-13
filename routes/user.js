import { Router } from 'express'
import {
	getOperationsUser,
	createUser,
	loginUser,
} from '../controllers/user.controller'
import { authToken } from '../auth'

const router = Router()

router.get('/operations',authToken, getOperationsUser)
router.post('/register', createUser)
router.get('/operations', loginUser)

export default router
