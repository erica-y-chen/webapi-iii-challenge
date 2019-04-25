const express = require('express');
const postRouter = require('./posts-router')
const server = express ();
const userRouter = require('./users-router')



server.use(express.json());

server.get('/', (req,res) => {
    res.send("It's alive!")
})

server.use('/api/posts', postRouter);
server.use('/api/users', userRouter, uppercase)

module.exports = server


function uppercase(req,res, next) {
    let { name } = req.body.name;
    if (req.method === "POST"){
        req.body.name = name.toUpperCase();
        next();
    } else {
        next();
    }
}

  
// function errorHandler(error, req, res, next) {
//     res.status(400).send('Bad panda!!');
//   }

