const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/events', async(req, res) => {
    console.log(req.body)
    axios.post('http://localhost:400/events', req.body)
    axios.post('http://localhost:4001/events', req.body)
    axios.post('http://localhost:4002/events', req.body)
    res.send({
        status: 'Ok'
    })
})
app.get('/events', (req, res) => {
    console.log('Recive Event', req.body.type)
    res.send('Hello')
})
app.listen(4005, () => {
    console.log('Server is runnig on 4005')
})