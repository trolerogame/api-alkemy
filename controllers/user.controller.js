import jwt from 'jsonwebtoken'
import { config } from '../config'
import { con } from '../db/connect'

export const getOperationsUser = (req,res) => {

}

export const createUser = (req, res) => {
    const {email, password} = req.body
    const insertUserQuery = `INSERT INTO users (email, password) VALUES (${email}, ${password})`
    con.query(insertUserQuery, (err,result) => {
        if(err) res.status(403).send({error:'The user already exists'})
        res.json({result})
    })
    res.send('Usuario Creado')
}

export const loginUser = (req, res) => {
}