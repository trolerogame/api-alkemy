import jwt from 'jsonwebtoken'
import { config } from '../config/index.js'
import { con } from '../db/connect.js'
import { encryptPassword, comparePassword } from '../utils/bcrypt.js'
import { v4 } from 'uuid'
const resError = (st,error,res) => 
	res.status(st).send({ error })

export const getOperationsUser = (req, res) => {}

export const createUser = async (req, res) => {
	const { email, password } = req.body
	const insertUserQuery = `INSERT INTO users (id,email, password) VALUES (UUID_TO_BIN(UUID()),'${email}', '${await encryptPassword(
		password
	)}')`
	con.query(insertUserQuery, (err, result) => {
		if (err) return resError(403, 'The user already exists', res)
		res.json({ result })
	})
}

export const loginUser = (req, res) => {
	const { email, password } = req.body
	const getUserQuery = `SELECT email,password FROM users WHERE email = '${email}'`
    con.query(getUserQuery, (err, result) => {
        if(err) return
		if(result.length === 0) return resError(404,'The user does not exist', res)
        const compare = comparePassword(password,result[0].password)
        if(!compare) res.status(403).json({error:'the user or password does not exist or is not valid'})
        const token = jwt.sign({...result[0]}, config.secret)
        res.json({token})
    })
}
