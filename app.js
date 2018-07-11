const express = require('express');
const mysql = require('mysql');
// var bodyParser = require('body-parser');
//create connection
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '',
    database: 'nodemysql'
});

//connect
mysqlConnection.connect((err) =>{
    if(!err)
        console.log('DB connection succeeded');
        else
        console.log('Mysql connected...');
    });

    
// const app = express();

// // app.set('view engine', 'ejs');
// // app.use('/assets', express.static('stuff'));



// });



// //create db
// app.get('/createdb', (req, res)=>{
//     let sql = "create database nodemysql";
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//         res.send('database created... ');
//     });
// });

// //create table
// app.get('/createlogintable', (req, res)=> {
//     let sql = 'CREATE TABLE  login(id int AUTO_INCREMENT, username varchar(20),password varchar(20), primary key(id))';
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//         res.send('login table created...');
//     });
// });

// app.get('/createregistertable', (req, res)=> {
//     let sql = 'CREATE TABLE  register(reg_id int AUTO_INCREMENT, title varchar(20),name varchar(50),email varchar(20), schooladdr varchar(100), schoolname varchar(50),lga varchar(50),phoneno varchar(20), position varchar(50), username varchar(20), password varchar(20), primary key(reg_id))';
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//         res.send('register table created...');
//     });
// });

// app.get('/createreporttable', (req, res)=> {
//     let sql = 'CREATE TABLE  report(title varchar(50),school_id int(255),school_name varchar(100), schl_desc varchar(255),LGA_name varchar(100),name_principal varchar(50),centre_code varchar(255),no_VPs varchar(50),no_HODs varchar(50),no_guidchanc varchar(50), fund_src varchar(200),street varchar(255), PObox varchar(255),Town_village varchar(255),Telephone int(15),Email varchar(50), primary key(school_id))';
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         console.log(result);
//         res.send('report1 added');
//     });
// });

// app.get('/report1', (req, res)=> {
//     let report  = {title: 'Quality Assurance Evaluation Report'};  
//     let sql = 'insert into report  ? ';
//     let query = db.query(sql, report, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('report1 added');

//     });
// });
// app.get('/getlocation', (req, res)=> {
//     let sql = 'select * from location';
//     let query = db.query(sql, (err, results) => {
//         if(err) throw err;
//         console.log(results);
//         res.send('location fetched');
    
//     });
// });

// app.use(express.bodyParser());

// // Main route sends our HTML file

// app.get('/', function(req, res) {
//     res.sendfile(__dirname + '/public/login.html');
// });


// app.listen('3000', () =>{
//     console.log('server started on 3000');
// });
var express    = require('express'),
  mysql      = require('mysql');

// Application initialization

var connection = mysql.createConnection({
        host     : 'localhost',
       user     : 'root',
       password : ''
   });
   
   var app = module.exports = express.createServer();

// Database setup

connection.query('CREATE DATABASE test', function (err) {
    if (err) throw err;
   connection.query('USE test', function (err) {
       if (err) throw err;
      connection.query('CREATE TABLE users('
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
           + 'name VARCHAR(30)'
           +  ')', function (err) {
                if (err) throw err;
            });
    });
});

// Configuration

app.use(express.bodyParser());

// Main route sends our HTML file

app.get('/', function(req, res) {
   res.sendfile(__dirname + '/index.html');
});

// Update MySQL database

app.post('/users', function (req, res) {
   connection.query('INSERT INTO users SET ?', req.body, 
       function (err, result) {
           if (err) throw err;
           res.send('user added to database with ID: ' + result.insertId);
       }
   );
});

// Begin listening

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env); 