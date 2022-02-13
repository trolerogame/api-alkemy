import express, { json, urlencoded } from 'express'
import { config } from './config'
import cors from 'cors'
import operationsRoute from './routes/operations'
import userRoute from './routes/user'
const app = express()

// config

app.use(cors())
app.use(json())
app.use(urlencoded())

// Routes

app.use('/operations',operationsRoute)
app.use('/user', userRoute)

// listen

app.listen(config.port || 3000, () => {
	console.log('server running in http://localhost:3000')
})
