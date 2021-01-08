const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
const commentsByPostId = {};
app.get('/posts/:id/comments', (req, res) => {
    return res.send( commentsByPostId[req.params.id] || [] );
});

app.post('/posts/:id/comments', (req, res) => {
    const commentsId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id: commentsId ,content: content});
    commentsByPostId[req.params.id] =comments

    

    return res.send(comments)

});

app.listen(4001, () => {
    console.log('Comment server listening on port 4001!');
});