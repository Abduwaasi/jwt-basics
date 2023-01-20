import express from "express"
import * as init from "dotenv"
import "express-async-errors"

import authRouter from './routes/main.js'
import errorHandlerMiddleware from "./middlewares/error-handler.js"
init.config()
const app = express()
const port = process.env.PORT || 8000

// Middlewares

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1', authRouter)
app.use(errorHandlerMiddleware)



const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`App is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()