import express, { json, urlencoded } from 'express'
import cors from 'cors'
import { config } from './config/index.js'
import operationsRoute from './routes/operations.js'
import userRoute from './routes/user.js'
import {con} from './db/connect.js'

// init
const app = express()

// config

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

// Routes

app.use('/operations',operationsRoute)
app.use('/user', userRoute)

// listen

con.connect((error) => {
	if(error) return console.log(error)
	console.log('database connect')
})

app.listen(config.port || 3000, () => {
	console.log('server running in http://localhost:3000')
})
