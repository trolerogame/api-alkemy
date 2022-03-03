import dotenv from 'dotenv'
dotenv.config()
export const config = {
	port: process.env.PORT,
	secret: process.env.SECRET,
	USERNAME: process.env.USERNAME,
	password: process.env.PASSWORD,
	host: process.env.HOST,
}
