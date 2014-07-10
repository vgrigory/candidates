// Splits the input array of strings into two arrays based on the separator
// 'sep'. The input array is assumed to be non-null, though may be empty, and to
// only contain String objects, none of which may be null. The return value is a
// 2-element array of strings, where the first array represents all elements of
// the input preceding the first occurrence of 'sep', and the second array
// represents all elements of the input following, but not including, the first
// occurrence of 'sep'. 
//
// Examples, using the given input and "--" as 'sep':
//
// The first occurrence of 'sep' is not included in the output:
//
//      [ "a", "--", "b" ] --> [ [ "a" ], [ "b" ] ]
//
// If 'sep' occurs multiple times, then values after the first occurrence are
// treated as normal strings and are included in the output:
//
//      [ "a", "--", "b", "--", "--", "c" ] --> 
//          [ [ "a" ], [ "b", "--", "--", "c" ]
//
// If the first occurrence of 'sep' occurs as the first element of the input
// then the first array in the output should be empty:
//
//      [ "--", "a", "b" ] --> [ [], [ "a", "b" ] ]
//
// If the first occurrence of 'sep' occurs as the last element of the input then
// the second array in the output should be empty:
//
//      [ "a", "b", "--" ] --> [ [ "a", "b" ], [] ]
//
// Empty input should lead to empty output:
//  
//      [] --> [ [], [] ]
//
//      [ "--" ] --> [ [], [] ]
//
// REMINDER: don't use any external modules or libraries for this exercise --
// just pure javascript
//
module.exports.splitFirst = function( input, sep ) {
    throw new Error( "Unimplemented" );
};
