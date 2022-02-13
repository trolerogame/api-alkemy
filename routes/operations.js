import { Router } from 'express'
import {
	createOperation,
	deleteOperation,
	updateOperation,
} from '../controllers/operation.controller'
import { authToken } from '../auth'

const router = Router()

router.post('/create',authToken, createOperation)
router.post('/update/:id',authToken, updateOperation)
router.post('/delete/:id',authToken, deleteOperation)

export default router
