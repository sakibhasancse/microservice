const express = require('express')
const { randomBytes } = require('crypto')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
const posts = {};
app.get('/posts', (req, res) => {
    return res.json(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = { title, id }

    await axios.post('http://localhost:4005/events', {
        type: "Created Posts",
        data: {
            id: id,
            title: title
        }
    })
    console.log('aa')
    return res.status(201).json(posts[id])

});

app.post('/events', (req, res) => {
    console.log('Recive Event', req.body.type)
    res.send('Hello')
})
app.listen(400, () => {
    console.log("v20")
    console.log('Post listening on port 400!');
});