var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const port = process.env.PORT || 5000;

const data = require('../data/may-temp.json')

app.get('/temperature', function (req, res) {
	res.json(data);
})

app.listen(port, () => console.log(`Listening on port ${port}`));