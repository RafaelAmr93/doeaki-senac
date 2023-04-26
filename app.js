const express = require('express');
const app = express()
const router = require('./router/router')
const port = 5000

app.listen(port, (req, res) => {
    console.log(`Escutando na porta ${port}...`);
});

app.use(express.static('public'));