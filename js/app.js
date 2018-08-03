const express = require('express');
const mysql = require('mysql');

// the following parameters should be comming from the application
const connectionParameters = {
    host:'localhost',
    user:'root',
    password:''
};
const databaseName = 'nodemysql';

// Create connection
const db = mysql.createConnection(connectionParameters);

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected');
});

// Create database
let sql = 'CREATE DATABASE ' + databaseName;
function CreateDatabase(req, res) {
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    });
};










//using express to accelerate development and testing of routines independent of html and css
const app = express();
// Create DB
app.get('/createdb', (req, res) => {
    CreateDatabase(req, res);
        res.send('Database created...');
});


app.listen('3000', () => {
    console.log('server started on port 3000');
});

