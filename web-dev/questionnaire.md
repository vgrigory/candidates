First Steps Questionnaire
=========================

As the first step in our getting to know each other, please take a moment to
send your answers to the questions below to
[work@dispatch.tv](mailto:work@dispatch.tv). Feel free to include just your
answers or, if you prefer, just download this file (click the "Raw" button at
the top of this github page) and include your answers directly inline.

For JavaScript questions, assume that you are using version 1.8.5 of the
language as described [at
Mozilla](https://developer.mozilla.org/en-US/docs/JavaScript/Reference).

1. What is the result of the following block of JavaScript code:
    
        ( function f( x, y, m ) {
    
            if ( m > 0 ) { return f( y, x + y, m - 1 ); }
            return y;
    
        }( 1, 2, 7 ) );

2. Given the following HTML fragments, what are the visual differences between
the two:
    
        <!-- Option A -->
        <div>
            <p id="p1">Hello</p>
            <p id="p2" style="visibility:hidden">my</p>
            <p id="p3">friend</p>
        </div>
    
        <!-- Option B -->
        <div>
            <p id="p1">Hello</p>
            <p id="p2" style="display:none">my</p>
            <p id="p3">friend</p>
        </div>
    
3. Given the following block of JavaScript:
    
        var o = { a: 1, b: "1.0", c: false, d: true };
        var a = "b";
    
   what are the results of the following expressions:
    
        o.a
        o[ a ]
        o.a == o.b
        o.a === o.b
        o.b == o.d
        o.a === o.d
        o.c ? "a" : "b"
        o.e
        o.e === null
        o.e != null

4. Create, Register, and Confirm an account using our [iOS
app](https://itunes.apple.com/us/app/dispatch.tv/id690762433?mt=8) or [the
website](http://www.dispatch.tv) (Note: registration page for the web can be
found [here](http://www.dispatch.tv/register). Once you're in, create a channel
with your name as the title and add the user `work@dispatch.tv` to your channel.
Because every channel requires at least one video or one text comment, use this
as an opportunity to tell us something you like about the app, and something
that you think should change or which could be done better. Please limit your
response to 500 characters or, if responding with a video, 30 seconds.

5. After you've used the app a little bit, step back and think about it in the
world at large. How would you use it? How would you explain it to other people
in 2 sentences? If you had to sell it as a productivity tool, who would you sell
it to (Nurses and doctors? Construction companies? Retail store managers?)
Please limit your answer to 500 characters.
