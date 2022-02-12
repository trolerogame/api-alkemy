import express, {json,urlencoded} from 'express'
import {config} from './config'
import cors from 'cors'
const app = express()

// config 

app.use(cors())
app.use(json())
app.use(urlencoded())


app.listen(config.port || 3000, () => {
    console.log('server running in http://localhost:3000')
})