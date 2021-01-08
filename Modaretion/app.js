const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

app.use(bodyParser.json())
app.use(cors())



app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    // its call to comments server to modared comment
    if (type === 'Comment Created') {
        const status = data.content.includes('NodeJs') ? 'rejected' : 'approved';
        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated', data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })

    }
})

app.get('/posts', (req, res) => {
    res.send(posts)
})
app.listen(4003, () => {
    console.log('Server is runnig on 4003')
})