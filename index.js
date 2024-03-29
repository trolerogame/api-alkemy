import express, { json, urlencoded } from 'express'
import cors from 'cors'
import { config } from './config/index.js'
import operationsRoute from './routes/operations.js'
import userRoute from './routes/user.js'
import './db/connect.js'


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

app.listen(config.port || 3300, () => {
	console.log('server running in http://localhost:' + config.port || 3300)
})
