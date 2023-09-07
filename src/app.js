const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path');
const Port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.use(express.static(path.join(__dirname + '/../public')));
app.use('/desktop',express.static(__dirname + '/../public'));

app.use(require('./routes/index'));

app.listen(Port,()=>{console.log('server initializing', `Port ${Port} `)});