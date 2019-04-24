const express = require('express');
const router = express.Router();
const db = require('./data/helpers/userDb.js');

router.get('/', async(req, res) => {
    db.get()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err=>{
        res.status(500).json({error: "the users information"})
    })
})

router.get('/:id', (req, res) => {
    const userId = req.params.id

    db.getById(userId)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err=> {
        res.status(404).json({error: "the post with the specified ID does not exist."})
    })
})

router.get('/:id/posts', (req, res) => {
    const userId = req.params.id

    db.getUserPosts(userId)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err => {
        res.status(404).json({error:"the user has no posts"})
    })
})

router.delete('/:id', (req,res) => {
    userId = req.params.id;
    
    db.remove(userId)
        .then(deleted => {
            res.status(204).end()
        })
        .catch( err=>{
            res.status(404).json({error: 'a user with that id does not exist'})
        })
})

router.post('/', (req, res) => {
    const postInformation = {
        name: req.body.name,
    }

    db.insert(postInformation)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err=>{
        res.status(404).json({error: 'error adding user'})
    })
})
module.exports=router;