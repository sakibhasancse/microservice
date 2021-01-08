const express  = require('express')
const {randomBytes} = require('crypto')
const bodyParser = require('body-parser')
const app = express()
const cors =require('cors')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
const posts = {};
app.get('/posts', (req, res) => {
    return res.json( posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {title,id}

    return res.status(201).json(posts[id])

});

app.listen(4000, () => {
    console.log('Post listening on port 4000!');
});