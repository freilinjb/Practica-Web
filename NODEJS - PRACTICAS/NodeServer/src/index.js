const express = require('express');
var path = require('path');
var morgan = require('morgan');

var app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'html');

app.get('/', (re,res)=>{
    res.send('Hola');
})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})