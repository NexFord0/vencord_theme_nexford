const express = require('express');
const app = express();
const PORT = 4521;

//setting middleware
app.use(express.static(__dirname)); //Serves resources from public folder

const server = app.listen(PORT);
console.log(`http://localhost:${PORT}`)