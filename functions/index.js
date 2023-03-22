
//Initializations

const natalie_sql = 'seniordesigndata.database.windows.net'
var server = ''
server = natalie_sql

const functions = require("firebase-functions");
const express = require('express');
const app = express();
const sql = require('mssql');
const cors = require('cors');
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
  try {
    let  pool = await  sql.connect(config);
    let  insert = await  pool.request()
    .insert('production_system_name',sql.NVarChar, data.production_system_name)
    .insert('product_name',sql.NVarChar, data.product_name)
    .insert('creation_date',sql.DateTime, data.creation_date)
  .query('INSER INTO '+tableName+' Values (@production_system_name, @product_name, @creation_date')
  console.log('Post Request Works')
  return  insert.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

//Template for POST Request

app.post('/Production_Systems', function(req, res) {
  console.log('POST Request Received')
  let data = {...req.body}
  console.log(data)
  postTable('Production_Systems',data)
  console.log('post table worked')
  res.end();
  console.log('POST Response Sent')
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