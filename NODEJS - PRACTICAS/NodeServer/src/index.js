var express = require('express');
var sql = require('mssql');
var app = express();

// app.get('/', function (req, res) {


//     // config for your database
//     var config = {
//         user: 'freilinjb',
//         password: 'fre123i4',
//         server: 'DESKTOP-0GJ4POO\\SQLEXPRESS',
//         database: 'Proyecto'
//     };

//     // connect to your database
//     sql.connect(config, function (err) {

//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();


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