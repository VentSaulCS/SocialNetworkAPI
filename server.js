const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello the server is working!')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


