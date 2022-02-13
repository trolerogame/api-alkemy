import jwt from 'jsonwebtoken'
import { config } from '../config'
import { con } from '../db/connect'
import { encryptPassword, comparePassword } from '../utils/bcrypt'
export const getOperationsUser = (req, res) => {}

export const createUser = (req, res) => {
	const { email, password } = req.body
	const insertUserQuery = `INSERT INTO users (email, password) VALUES ('${email}', '${encryptPassword(
		password
	)}')`
	con.query(insertUserQuery, (err, result) => {
		if (err) res.status(403).send({ error: 'The user already exists' })
		res.json({ result })
	})
	res.send('User Created')
}

export const loginUser = (req, res) => {
	const { email, password } = req.body
	const getUserQuery = `SELECT email,password FROM users WHERE email = '${email}'`
    con.query(getUserQuery, (err, result) => {
        if(err) return
        const compare = comparePassword(password,result.password)
        if(!compare) res.status(403).json({error:'the user or password does not exist or is not valid'})
        const token = jwt.sign({result}, config.secret)
        res.json({token})
    })
}
