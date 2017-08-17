
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


// Routing for Sample App
app.use('/', express.static('./apps/sample-app'));


// listening on port 3000
app.listen(3000);


// Logging status to console
console.log("--------------------------------------------------");
console.log("----- Sample app server running at port 3000 -----");
console.log("--------------------------------------------------");

/*********************************************************************************************/
/*********************************************************************************************/
