import express from 'express'
const router = express.Router()
import mongoose from 'mongoose'

import User from '../models/user.js'

// TS custom interfaces
// export interface ResponseCustom extends express.Response {
//     user: User
// }

// Get All Users
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({'message': error.message})
        } else {
            res.status(500).json({'message': error})
        }
    }
})
// Get User
router.get('/:id', getUser, (req, res: any) => {
    res.send(res.user)
})

// Create a User
router.post('/', async (req, res) => {
    const user = new User({
        'firstName': req.body.firstName,
        'lastName': req.body.lastName,
        'email': req.body.email
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({'message': error.message})
        } else {
            res.status(400).json({'message': error})
        }
    }
})

// Update a User
router.patch('/:id', getUser, async (req, res: any) => {
    if(req.body.firstName != null) {
        res.user.firstName = req.body.firstName
    }
    if(req.body.lastName != null) {
        res.user.lastName = req.body.lastName
    }
    if(req.body.email != null) {
        res.user.email = req.body.email
    }
    if(req.body.createdAt != null) {
        res.json({'message': 'createdAt cannot be updated.'})
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({'message': error.message})
        } else {
            res.status(400).json({'message': error})
        }
    }
})

// Delete a User
router.delete('/:id', getUser, async (req, res: any) => {
    try {
        await res.user.delete()
        res.json({'message': 'User deleted successfully'})
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({'message': error.message})
        } else {
            res.status(500).json({'message': error})
        }
    }
})


async function getUser(req: express.Request, res: any, next: express.NextFunction) {
    let user
    try {
        user = await User.findById(req.params.id)
        if(user == null) {
            return res.status(404).json({'message': 'Cannot find User'})
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({'message': error.message})
        } else {
            res.status(500).json({'message': error})
        }
    }
    res.user = user
    next()
}

export default router
