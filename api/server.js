const express = require('express');
const postsRouter = require('../posts/posts-router');

const server = express();

server.use(express.json());

server.get('/api/posts', (req, res) => {
    res.send(`
    <h1>Christine's Blog Posts API</h1>`);
});

server.use('/api/posts', postsRouter);

module.exports = server;