const express = require('express');
path = require('path');
morgan = require('morgan');
var sql = require()

const app = express();

app.set('port',process.env.PORT || 3000 );

//Middlewares
app.use(morgan('dev'));


app.get('/', (req,res) =>{
    res.send('Hola Mundo');
});

app.get('/', function() {
    var config = {
        user : 
    }
})

app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})