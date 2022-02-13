import mysql from 'mysql'
import { config } from '../config/index.js'
export const con = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database:'alkemy',
	insecureAuth : true,
	port:3306
})
