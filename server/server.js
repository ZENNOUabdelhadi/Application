const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/add', (req, res) => {
    console.log(req.body);
    // connexion to database mongodb
    // creation model
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
