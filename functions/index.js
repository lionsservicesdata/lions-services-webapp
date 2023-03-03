const functions = require("firebase-functions");
const express = require('express');
const app = express();

const config = {
    user: 'USERNAME',
    password: 'PASSSWORD',
    server: 'YOUR_SERVER_IP',
    database: 'DB_NAME',
    synchronize: true,  //optional
    trustServerCertificate: true, //optional
};

//API START\\
app.get('/getCustomers', (req, res) => {
const cusCode = req.query.cusCode;
const sql = require('mssql');

sql.connect(config, function (err) {
if (err) { console.log(err); return; }
var request = new sql.Request();
request.query(`ADD_YOUR_SQL_WITH_HERE_cusCode AS ${cusCode}`, function (err, recordsets) {
if (err) { console.log(err); return; }
             if (recordsets) {
                res.status(200).send(recordsets);
             }
        })
    })
});

app.get('/timeStamp', (req, res) => {
    res.send(`${Date.now()}`);
})
//API END\\
exports.app = functions.https.onRequest(app);