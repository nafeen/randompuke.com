/*
**	This is where the user-defined functions are stored	
*/

// creating an empty array of functions object that will hold all UDF
var functions = {};


/* ============================================================================================ */
/* function to convert a string to ProperCase - usage - toProperCase("string") */
/* ============================================================================================ */

functions.toProperCase = function (str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


/* ============================================================================================ */
/* functions to format money values like rent, deposit etc. */
/* ============================================================================================ */

functions.formatRupee = function(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "");
}


/* ============================================================================================ */
/* function to get the current time */
/* ============================================================================================ */

functions.getDateTime = function () {
  var date  = new Date();
  var hour  = date.getHours();
  var min   = date.getMinutes();
  var sec   = date.getSeconds();
  var year  = date.getFullYear();
  var month = date.getMonth() + 1;
  var day   = date.getDate();
  hour      = (hour < 10 ? "0" : "") + hour;
  min       = (min < 10 ? "0" : "") + min;
  sec       = (sec < 10 ? "0" : "") + sec;
  month     = (month < 10 ? "0" : "") + month;
  day       = (day < 10 ? "0" : "") + day;
  return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
};


/* ============================================================================================ */
/* function to format the time variables from database (pass date-time as function parameter) */
/* ============================================================================================ */

functions.formatDateTime = function (dateTime) {
  var date  = new Date(dateTime);
  var hour  = date.getHours();
  var min   = date.getMinutes();
  var sec   = date.getSeconds();
  var year  = date.getFullYear();
  var month = date.getMonth() + 1;
  var day   = date.getDate();
  hour      = (hour < 10 ? "0" : "") + hour;
  min       = (min < 10 ? "0" : "") + min;
  sec       = (sec < 10 ? "0" : "") + sec;
  month     = (month < 10 ? "0" : "") + month;
  day       = (day < 10 ? "0" : "") + day;
  return day + "/" + month + "/" + year;
};


/* ============================================================================================ */
/* ============================================================================================ */

module.exports = functions;

/* ============================================================================================ */
/* ============================================================================================ */