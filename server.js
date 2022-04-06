const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const Port = process.env.Port || 8080;

app.get('/', (req, res) => {
    res.send('helloo server is running at', Port);
});

app.listen(Port, () => console.log(`Server is running seccussfully on port: ${Port}`));