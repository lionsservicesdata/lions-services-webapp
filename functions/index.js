
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
      let products = await pool.request().query('SELECT * FROM ' + tableName);
      return products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

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