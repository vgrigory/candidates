// A test application that runs on the port specified in web-conf.js.
//
// To answer various test questions, implement API responders described in the
// body of this file.

var express = require( "express" )
,   webConf = require( "./web-conf" )
;

// Implement this method to respond to test API requests. Test API requests will
// be POSTed as JSON objects having the following fields:
//
//  op (String)
//      The operation to call (see below for specific operations to implement)
//
//  params (Object|null)
//      A possibly empty or null object containing parameters for the operation
//
// The API response should be a JSON object containing at most one of the
// following fields:
//
//  result (any type of value)
//      The result of the operation.
//
//  error (String)
//      An error string if the operation couldn't be completed for some reason.
//
// For testing purposes, the API should respond as follows:
//
// For the operation 'sayHello', the API should read the parameter 's' and
// respond with the string "Hello, ___!" where '___' is the value of the 's'
// parameter:
//
//      { op: "sayHello", params: { s: "Joe" } } -->
//          { result: "Hello, Joe!" }
//
// If params is null or missing the parameter 's' the result should be the
// following error response:
//
//      { error: "param missing: s" }
//
// If the request is missing an operation the API should respond with the
// following error:
//
//      { error: "missing operation" }
//
// If an unrecognized operation 'X' is specified, the API should respond with
// the error response:
//
//      { error: "no such op: X" }
//
function respondApi( req, res, next ) {
    res.send( 501, { error: "Unimplemented" } );
}

function initApp( app ) {
    
    app.post( "/api", respondApi );
}

function startApp( app ) {
    
    app.listen( webConf.httpPort );
    
    console.log( "Listening for HTTP connections on %d (Control-C to quit)",
        webConf.httpPort );
}

var app = express();
initApp( app );
startApp( app );
