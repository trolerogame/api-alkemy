import { Router } from 'express'
import {
	createOperation,
	deleteOperation,
	updateOperation,
} from '../controllers/operation.controller.js'
import { authToken } from '../auth/index.js'

const router = Router()

router.post('/create',authToken, createOperation)
router.post('/update/:id',authToken, updateOperation)
router.post('/delete/:id',authToken, deleteOperation)

export default router
