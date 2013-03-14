var assert = require( "assert" )
,   arrays = require( "../arrays" )
,   apiCalls = require( "../api-calls" )
,   webConf = require( "../web-conf" )
;

describe( "questions", function() {

    describe( "array-split", function() {

        function makeTest( input, expct ) {
            
            it( JSON.stringify( input ), function() {

                var split = arrays.splitFirst( input, "--" );
                assert.deepEqual( split, expct );
            });
        }

        makeTest( [ "a", "b", "--", "c", "d" ], 
                  [ [ "a", "b" ], [ "c", "d" ] ] );
 
        makeTest( [], [ [], [] ] );

        makeTest( [ "a" ], [ [ "a" ], [] ] );

        makeTest( [ "a", "--" ], [ [ "a" ], [] ] );

        makeTest( [ "--", "b" ], [ [], [ "b" ] ] );

        makeTest( [ "--" ], [ [], [] ] );

        makeTest( [ "--", "--" ], [ [], [ "--" ] ] );

        makeTest( [ "a", "--", "b", "--" ], [ [ "a" ], [ "b", "--" ] ] );

        makeTest( [ "a", "--", "--", "--" ], [ [ "a" ], [ "--", "--" ] ] );
    });

    describe( "api-call", function() {
        
        var apiCli = new apiCalls.ApiClient( webConf.httpPort );
        
        function makeTest( req, respExpct ) {
            
            it( JSON.stringify( req ), function( done ) {
                
                apiCli.request( req, function( respAct, err ) {
                    
                    if ( err ) { return done( err ); }
                    
                    assert.deepEqual( respAct, respExpct );
                    done();
                });
            });
        }

        makeTest( 
            { op: "sayHello", params: { s: "Tester" } },
            { result: "Hello, Tester!" }
        );

        makeTest(
            { op: "sayHello" },
            { error: "param missing: s" } 
        );

        makeTest(
            { params: { irrelevant: true } },
            { error: "missing operation" }
        );

        makeTest(
            { op: "badOp" },
            { error: "no such op: badOp" }
        );

    });

});
