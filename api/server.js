const express = require('express');
const postsRouter = require('../posts/posts-router');
const Posts = require('../data/db');

const server = express();

server.use(express.json());

server.get('/api/posts', (req, res) => {
    Posts.find()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        console.log("Error on GET /api/posts from db", error);
        res.status(500).json({error: "The posts information could not be retrieved."})
    })
});

server.use('/api/posts', postsRouter);

module.exports = server;