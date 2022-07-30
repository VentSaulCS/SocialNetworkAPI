const express = require('express')
const db = require('./config/connection');
const routes = require('./routes');






const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello the server is working!')
})

db.once('open', () => { 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
});

