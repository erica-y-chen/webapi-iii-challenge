const express = require('express');
const router = express.Router();
const db = require('./data/helpers/postDb.js');

router.get('/', async(req, res) => {
    db.get()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err=>{
        res.status(500).json({error: "the posts information"})
    })
})

router.get('/:id', (req, res) => {
    const postId = req.params.id

    db.getById(postId)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err=> {
        res.status(404).json({error: "the post with the specified ID does not exist."})
    })
})

router.post('/', (req,res) => {
    const postInformation = {
        // id: req.body.id,
        text: req.body.text
    }

    db.insert(postInformation)
    .then(post => {
        res.status(200).json(post);
    })
    .catch(err=>{
        res.status(404).json({error: 'error adding post'})
    })
})


router.delete('/', (req,res) => {
    postId = req.params.id;
    
    db.remove(postId)
        .then(deleted => {
            res.status(204).end()
        })
        .catch( err=>{
            res.status(404).json({error: 'a post with that id does not exist'})
        })
})


module.exports = router;