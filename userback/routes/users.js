import { Router } from 'express';
import { Users } from "../User.mjs"


const router = Router();


//getting all
router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

//getting one
router.get('/:id', async (req, res) => {
    const users = await Users.findById(req.params.id)
    if (users) {
        res.send(users)
    }
    else {
        res.send(404).json({ message: "user not found" })
    }
})

//creating one
router.post('/', async (req, res) => {
    const user = new Users({...req.body})
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

//updating one
router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await Users.updateOne(
            { _id: req.params.id },
            { $set: { firstName: "bardiatest" } });
        res.status(200)
    } catch {
        res.status(404).json({ message: "no user at this id" })
    }

})

//deleting one
router.delete('/:id', async (req, res) => {
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200)
    } catch {
        res.status(404).json({ message: "no user with this id" })
    }

})

export { router };