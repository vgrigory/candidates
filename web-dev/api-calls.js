// ApiClient constructor.
module.exports.ApiClient = function( port ) { this.port = port; };

// Asynchronous API request method. The 'req' parameter is an object which will
// be JSON encoded and POSTed to the API at the /api uri. The callback is a
// function with the signature ( resp, err ), where 'resp' is the object
// returned in the server's response body (as JSON), and 'err' is an HTTP or
// network-related error that prevented getting any response from the server.
//
// Some important things to note:
//
// The signature of the callback 'cb' is different from the node.js standard, in
// that it takes 'err' as the second parameter instead of the first.
//
// It is possible to implement this function without knowing anything about the
// semantics of the API (described in app.js -- see respondApi() in that file).
// All that is required for this method is understanding that the request and
// response are JSON encoded.
//
// This method should treat any non-200 status as an error and should assume
// that any 200 status indicates a valid JSON response body.
module.exports.ApiClient.prototype.request = function( req, cb ) {
    throw new Error( "Unimplemented" );
};
