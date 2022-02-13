import { Router } from 'express'
import {
	getOperationsUser,
	createUser,
	loginUser,
} from '../controllers/user.controller'

const router = Router()

router.get('/operations', getOperationsUser)
router.post('/register', createUser)
router.get('/operations', loginUser)

export default router
