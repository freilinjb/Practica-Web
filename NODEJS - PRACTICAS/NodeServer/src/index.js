var express = require('express');
var sql = require('mssql');
const app = express();

app.get('/', function (req, res) {


    // config for your database
    var config = {
        user: 'freilinjb',
        password: 'fre123i4',
        server: 'DESKTOP-0GJ4POO\\SQLEXPRESS',
        database: 'Proyecto'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();


        // query to the database and get the records
        request.query('select top 3 id_tercero,nombre from VistaAbogado', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(3000, function () {
    console.log('Server is running..');
});

// const express = require('express');
// path = require('path');
// morgan = require('morgan');
// sql = require('mssql');

// const app = express();

// app.set('port',process.env.PORT || 3000 );

// //Middlewares
// app.use(morgan('dev'));


// // app.get('/', (req,res) =>{
// //     res.send('Hola Mundo');
// // });

// app.get('/', function(req, res) {
//     var config = {
//         user : 'freilinjb',
//         password : 'fre123i4',
//         server: 'DESKTOP-0GJ4POO\SQLEXPRESS',
//         database: 'Proyecto'
//     }

//     //Connect to your database
//     sql.connect(config, function(err){
//         if(err)
//             console.log(err);

//         var request = new sql.Request();

//         request.query('select * from VistaAbogado ', function(err, recordset) {

//             if(err)
//                 console.log(err);

//             res.send(recordset);

//         })

//     })
// })

// app.listen(app.get('port'), ()=> {
//     console.log(`Server on port ${app.get('port')}`);
// })