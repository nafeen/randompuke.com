
/**********************************************************************************************
 *
 * THIS SCRIPT CREATES THE WEB SERVER FOR RUNNING SAMPLE APP
 *
 ********************************************************************************************** */


/* ============================================================================================
 * TODO:
 *
/* ============================================================================================ */


// ADDING middlewares and other dependencies
var express            =   require('express');
var app                =   express();
const path = require("path")


// Auto-redirect HTTP requests to HTTPS
// app.use(function(req, res, next) { 
//     // console.log("|| Request Log || ", req.get('X-Forwarded-Proto'), "/", req.get('Host'), req.url);
//     if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'].toLowerCase() === 'http') {
//         console.log("Redirecting HTTP to HTTPS");
//         return res.redirect('https://' + req.headers.host + req.url);
//     }
//     else {
//         next();
//     }
// });


// Set the default views directory to PAGES folder
app.set('views',    [
                        __dirname + '/apps/material-dashboard/pages'
                    ]);

app.use('/assets', express.static('./apps/material-dashboard/assets'));

// Set the view engine to ejs
app.set('view engine', 'ejs');


// Routing for Material Dashboard
app.use('/dashboard', require('./apps/material-dashboard/route.js'));


// Routing for 404 Page
app.use('/', express.static('./apps/404-page'));
app.use('*', express.static('./apps/404-page'));


// listening on port 3000
app.listen(3000);


// Logging status to console
let serverStartTime = new Date(Date.now()).toLocaleString();
    console.log("--------------------------------------------------------------");
    console.log("----- " + serverStartTime + " | Sample Server | port 3000 -----");
    console.log("--------------------------------------------------------------");

/*********************************************************************************************/
/*********************************************************************************************/
