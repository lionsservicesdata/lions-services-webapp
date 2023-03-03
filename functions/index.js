
//Initializations

const claire_beachhouse = '47.27.0.162'
var server = ''
server = claire_beachhouse

const functions = require("firebase-functions");
const express = require('express');
const app = express();
const sql = require('mssql');

const config = {
    user: 'user', // sql user
    password: '7U6^060JeHsk', //sql user password
    server: server,
    database: 'Production',
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

//API END\\
exports.app = functions.https.onRequest(app);