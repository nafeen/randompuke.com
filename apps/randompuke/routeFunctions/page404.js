/*********************************************************************************************
 *
 * This is where the routeFunction holds the logic of Careers Page render
 *
 ********************************************************************************************* */


/* ============================================================================================
 * TODO:
 *
 * 1 -	EDIT rootPath and homePath
 *
/* ============================================================================================ */


// creating an empty array of functions object that will hold all UDF
var functions = {};


// ADDING middlewares and other dependencies


// INITIALISING user-defined variables
var rootPath        = '';
var homePath        = '';


// ADDING user-defined dependencies
var userFunctions   = require('../userFunctions');


/* ============================================================================================ */
/* Render function definition */
/* ============================================================================================ */

functions.routeFunction  = function (req, res, next) {
  res.render('page-404/index.ejs', {
	rootPath : rootPath,
	homePath : homePath,
	currTime : userFunctions.getDateTime(),
	title    : '404 Not Found | Nafeen',
	pageName : '404 Not Found',
	user     : req.user || ''
  });
}


/* ============================================================================================ */
/* MODULE.EXPORTS is the object that is returned as a result of a 'require' call */
/* ============================================================================================ */

module.exports = functions;

/*********************************************************************************************/
/*********************************************************************************************/