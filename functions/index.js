
//Initializations

const natalie_sql = 'seniordesigndata.database.windows.net'
var server = ''
server = natalie_sql

const functions = require("firebase-functions");
const express = require('express');
const app = express();
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors())


const config = {
    user: 'CloudSA2d97a179', // sql user
    password: '8w0Zq@^*^8C!', //sql user password
    server: server,
    database: 'Webapp',
    options: {
        trustedconnection: true,
        enableArithAbort: true,
    },
    trustServerCertificate: true,
    port: 1433
}

//Helper Functions

async function getTable(tableName) {
  try {
    let pool = await sql.connect(config);
    let rows = await pool.request().query('SELECT * FROM ' + tableName);
    return rows.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async function postTable(tableName, data) {
console.log(data)
try {
  let  pool = await  sql.connect(config);
  let  input = await  pool.request()
  .input('production_system_name',sql.NVarChar, data.production_system_name)
  .input('product_name',sql.NVarChar, data.product_name)
  .input('date_created',sql.DateTime, data.date_created)
.query('INSERT INTO '+tableName+' Values (@production_system_name, @product_name, @date_created)')
return  input.recordsets;
}
catch (error) {
  console.log(error);
}
}

async function scanQR(data) {
console.log(data)
try{
  let  pool = await  sql.connect(config);
  let  input = await  pool.request()
.query('UPDATE [dbo].[QR] SET scanned = 1, date_scanned = \''+data.date_scanned+'\' WHERE id ='+data.id)
return input.recordsets;
}catch(error) {
  console.log(error)
}
}

//Misc Post Requests

app.post('/QRSCAN', function(req, res) {
console.log('QR SCAN RECEIVED')
let data = {...req.body}
scanQR(data)
res.end();
console.log('QR SCAN SUCCESSFUL')
});



//Template for POST Request

app.post('/Production_Systems', function(req, res) {
console.log('NEW PRODUCTION SYSTEM SUCCESSFULY RECEIVED')
let data = {...req.body}
postTable('Production_Systems',data)
res.end();
console.log('NEW PRODUCTION SYSTEM SUCCESSFULY CREATED')
});

app.post('/QR', function(req, res) {
console.log('NEW QR SUCCESSFULY RECEIVED')
let data = {...req.body}
postTable('QR',data)
res.end();
console.log('NEW QR SUCCESSFULY CREATED')
});

app.post('/Lots', function(req, res) {
console.log('NEW LOT SUCCESSFULY RECEIVED')
let data = {...req.body}
postTable('Lots',data)
res.end();
console.log('NEW LOT SUCCESSFULY CREATED')
});

app.post('/Stations', function(req, res) {
console.log('NEW STATION SUCCESSFULY RECEIVED')
let data = {...req.body}
postTable('Stations',data)
res.end();
console.log('NEW STATION SUCCESSFULY CREATED')
});

//API Endpoints

app.get('/QR', (req, res) => {
  console.log('GET Request Received')
  getTable('QR').then((data) => {
    res.send(data[0]);
  })
  console.log('GET Response Sent')
});

app.get('/Production_Systems', (req, res) => {
  console.log('GET Request Received')
  getTable('Production_Systems').then((data) => {
    res.send(data[0]);
  })
  console.log('GET Response Sent')
});

app.get('/Stations', (req, res) => {
  console.log('GET Request Received')
  getTable('Stations').then((data) => {
    res.send(data[0]);
  })
  console.log('GET Response Sent')
});

app.get('/Lots', (req, res) => {
  console.log('GET Request Received')
  getTable('Lots').then((data) => {
    res.send(data[0]);
  })
  console.log('GET Response Sent')
});

//API END\\
exports.app = functions.https.onRequest(app);