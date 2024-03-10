const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const helper = require("./helper")

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(4400, () => console.log('server started on 4400'));

app.use(express.static(path.join(__dirname,'./dist/qareer-ui')));

app.get("*",(req,res)=>{
    return res.sendFile(path.join(__dirname,'./dist/qareer-ui/index.html'));
});