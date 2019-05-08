/**********************************************************************************************
 *
 * THIS SCRIPT HANDLES ROUTING OF WEBSITE 
 *
 ********************************************************************************************** */


/* ============================================================================================
 * TODO:
 *
 * 1 -	
 *
/* ============================================================================================ */


// ADDING middlewares and other dependencies
var express         					= require('express');
var router 								= express.Router();

	// ==========================
	// ----- FOR FUTURE USE -----
	// ==========================
	// var request         					= require('request'); // to capture HTTP requests
	// var multiparty      					= require('multiparty');
	// var async 							= require('async');
	// var crypto							= require('crypto');


// ADDING user-defined dependencies
var routeVariables  					= require('./routeVariables');
var userFunctions   					= require('./userFunctions');

	// ==========================
	// ----- FOR FUTURE USE -----
	// ==========================
	// var api             					= require('./api'); // contains data API calls
	// var mail								= require('../../apps/mail/mail_helper')('hello');


// ADDING sub-route functions that render respective views
var landingPage							= require('./routeFunctions/landingPage');
var page404								= require('./routeFunctions/page404');


// INITIALISING user-defined variables
var rootPath        					= '';
var homePath        					= '';


/* ============================================================================================ */
/* LANDING PAGE */
/* ------------ */

// capturing the root URL request and routing to landing page render function
router.get('/', landingPage.routeFunction);


/* ============================================================================================ */
/* 404 PAGE */
/* -------- */

router.get('/*', page404.routeFunction);


/* ============================================================================================ */
/* MODULE.EXPORTS is the object that is returned as a result of a 'require' call */
/* ============================================================================================ */

module.exports = router;

/*********************************************************************************************/
/*********************************************************************************************/