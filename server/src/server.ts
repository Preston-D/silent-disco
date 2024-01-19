import 'dotenv/config'

import express from 'express'
const app = express()
import mongoose from 'mongoose'

// Mongoose Setup
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connnected to Database'))
// This should be set in production
// mongoose.set('autoIndex', false);

// Express Setup
app.use(express.json())
import {debugLogger} from './serverHelper'
app.use(debugLogger)

// Routes
import usersRouter from './routes/users'
app.use('/users', usersRouter)


app.listen(3000,() => console.log('Server Started'))

// Home Routes '/'
app.get('/', (req, res, next) => {
    req.
    res.send('Hello World!')
    next()
  })
