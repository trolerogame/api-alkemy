import jwt from 'jsonwebtoken'
import {config} from '../config'
export const authToken = (req,res,next) => {
    const header = req.headers.authorization
    if(!header) return 'No authorization header found'
    const token = req.headers.authorization.split(' ')[1]
    if(!token) return 'Empty token'
    const validate = jwt.verify(token,config.secret)
    if(!validate) return 'The token is not valid'
    req.userId = validate.id
    next()
}