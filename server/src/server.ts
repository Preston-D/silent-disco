import 'dotenv/config'

import express from 'express'
const app = express()
import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connnected to Database'));

app.use(express.json());

import usersRouter from './routes/users';
app.use('/users', usersRouter)

app.listen(3000,() => console.log('Server Started'));
