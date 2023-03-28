const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));
app.use('/desktop',express.static(__dirname + '/public'));

app.use(require('./routes/index'));

app.listen(process.env.PORT,()=>{console.log('serve initializing', `Port ${process.env.PORT} `)});