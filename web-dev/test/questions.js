var assert = require( "assert" )
    arrays = require( "../arrays" )
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

});
