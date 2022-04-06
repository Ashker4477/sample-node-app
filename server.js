const express = require('express');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const Port = process.env.Port || 8080;

app.get('/user', (req, res) => {
    res.send(`helloo server is running at${Port}`);
});
app.use(express.static(path.join(__dirname,"index.html")));
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})


app.listen(Port,() => console.log(`Server is running seccussfully on port:${Port}`));