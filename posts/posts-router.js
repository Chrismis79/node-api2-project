const express = require('express');
const Posts = require('../data/db');

const router = express.Router();

router.use(express.json());

//GET /api/posts
router.get('/', (req, res) => {
    Posts.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            console.log("Error GET /api/posts", error);
            res.status(500).json({error: "The posts information could not be retrieved."})
        });
});

//POST /api/posts

//POST /api/posts/:id/comments

//GET /api/posts/:id

//GET /api/posts/:id/comments

//DELETE /api/posts/:id

module.exports = router;