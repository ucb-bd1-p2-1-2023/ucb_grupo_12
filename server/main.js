const express = require ('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());


app.use(cors({
 origin: '*'
}));


const port = 3000;


app.get('/', (req, res) => {
 res.send('API is working');
})

//craer para cada tabla
//tabla user
app.post('/driver',(req, res) => {
 const body = req.body;
 //connection.connect();
 const query = `INSERT INTO user(firstName, lastName, email, telephone, password) VALUES ('${body.firstName}', '${body.lastName}','${body.email}', '${body.telephone}', '${body.password}');`;
 connection.query( query, (err, rows, fields) => {
   if (err) throw err
   console.log('1 record inserted');
 })
 //connection.end();
 res.send('1 record inserted');
})
//tabla conductor
app.post('/conductor',(req, res) => {
  const body = req.body;
  //connection.connect();
  const query = `INSERT INTO conductor(idConductor,licensenumber,carmake,carmodel,carcolor,caryear,carlicenceplate) VALUES 
  ('${body.idConductor}','${body.licensenumber}', '${body.carmake}','${body.carmodel}','${body.carcolor}','${body.caryear}','${body.carlicenceplate}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  //connection.end();
  res.send('1 record inserted');
 })
 
 //tabla registro_ubicacion
 app.post('/registro_ubicacion',(req, res) => {
  const body = req.body;
  //connection.connect();
  const query = `INSERT INTO registro_ubicacion(fecha, startLocation,endLocation, price) VALUES ('${body.fecha}', '${body. startLocation}','${body.endLocation}', '${body.price}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  //connection.end();
  res.send('1 record inserted');
 })


app.listen(port, () => {
 console.log(`Project sample is running on: ${port}`)
})


const connection = mysql.createConnection({
 host: 'localhost',
 port: '3306',
 user: 'root',
 password: 'root',
 database: 'db1'
})

//connection.connect(()=> console.log("connection start"));
connection.connect();