const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use('/static', express.static('static'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})