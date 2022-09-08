import { Router } from 'express';
import { Connection } from 'mongoose';
export const router = Router();
// const User = require('../Users.mjs');
import {Users} from "../User.mjs"

//getting all
router.get('/,', async (req, res) => {
    try {
        const users = await Users.find(filter = "")
        res.json(users)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})
//getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)  
})
//creating one
router.post('/,', async (req, res) => {
    const user = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        sex: req.body.sex,
        email: req.body.sex,
        phoneMumber: req.body.phoneMumber,
        adress: req.body.adress,
        role: req.body.role
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err){
        res.status(400).json({message: err.message})
    }

})
//updating one
router.patch('/:id', ( req, res) => {

})
//deleting one
router.delete('/:id,', (req, res) => {

})




