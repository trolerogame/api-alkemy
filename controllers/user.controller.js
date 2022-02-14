import jwt from 'jsonwebtoken'
import { config } from '../config/index.js'
import { encryptPassword, comparePassword } from '../utils/bcrypt.js'
import User from '../schema/User.js'
import { v4 } from 'uuid'

const resError = (st, error, res) => res.status(st).send({ error })

export const getOperationsUser = (req, res) => {
	console.log(req.userId)
}

export const createUser = async (req, res) => {
	const { email, password } = req.body
	if (!email || !password)
		return resError(402, 'Please enter a valid email and password', res)
	try {
		await User.create({
			id: v4(),
			email,
			password: await encryptPassword(password),
		})
		res.json({ message: '', email, password })
	} catch (err) {
		resError(401, 'The user already exists', res)
	}
}

export const loginUser = async (req, res) => {
	const { email, password } = req.body
	if (!email || !password)
		return resError(402, 'Please enter a valid email and password', res)
	try {
		const userFind = await User.findAll({ where: { email } })
		if (!userFind.length)
			return resError(404, 'The user does not exist', res)
		const { id, password: passwordHash } = userFind[0].dataValues
		const compare = await comparePassword(password, passwordHash)
		if (!compare)
			return resError(
				403,
				'the email or password does not exist or is not valid',
				res
			)
		const token = jwt.sign({ id, email }, config.secret)
		res.json({ token })
	} catch (e) {
		console.log(e)
		res.send('error')
	}
}
