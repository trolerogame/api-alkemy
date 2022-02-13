import { Router } from 'express'
import {
	createOperation,
	deleteOperation,
	updateOperation,
} from '../controllers/operation.controller'

const router = Router()

router.post('/create', createOperation)
router.post('/update/:id', updateOperation)
router.post('/delete/:id', deleteOperation)

export default router
