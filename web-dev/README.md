Our WebDev Position
===================

We're looking for a web developer with strong client- and server-side JavaScript
skills, a solid command of HTML, the DOM, and CSS (You don't have to be a
designer, but you do need to understand how CSS *works*).

The day to day responsibilities will be to implement and evolve the Hangar162
web applications and to take an ongoing role in shaping what the product is and
how it does it. You should be comfortable working with the `git`, `node`, `npm`
and other commands, and should know how to run basic Unix shell commands and
scripts.

If that's you, then the exercises below should be a walk in the park!

Technical Exercises
===================

This directory contains a working express-powered website and mocha tests, as
well as some stubbed out methods for you to implement. We're looking to see how
well you know your way around a few of the technologies that we use to build our
web applications:

-   [NodeJs](http://nodejs.org/) -- our core server-side JS engine.

-   [ExpressJs](http://expressjs.com/) -- on top of which we build our
    website(s).

-   [Jade](http://jade-lang.com/), which we use for our HTML templating.

-   AJAX/Browser based JavaScript.

To help demonstrate and exercise some core concepts, you should complete the
following tasks:

-   Obtain a recent version of NodeJs and `npm`, and use `npm` to install the
    test application:

        $ cd web-dev
        $ npm install

-   Implement the method `splitFirst` in
    [`arrays.js`](https://github.com/h162/candidates/blob/master/web-dev/arrays.js).
    You can test your implementation (as we will) with the following command:
        
        $ ./node_modules/mocha/bin/mocha -g 'array' test/questions.js

-   Implement the application's simplistic JSON/HTTP API as specified in the
    `respondApi()` method in
    [`app.js`](https://github.com/h162/candidates/blob/master/web-dev/app.js).

-   Implement the equally simplistic JSON/HTTP API client which is stubbed out
    and defined in
    [`api-calls.js`](https://github.com/h162/candidates/blob/master/web-dev/api-calls.js).

    You can test the API and your client by first starting the app (probably
    you'll want to do this in a separate terminal):

        $ node app.js

    and then running the api tests (back in your main terminal):

        $ ./node_modules/mocha/bin/mocha -g 'api' test/questions.js

-   Render and implement client-side logic for the page `/page1`. Details are in
    [`page1.jade`](https://github.com/h162/candidates/blob/master/web-dev/views/page1.jade). With your server running, you can test your page by going to 
    
        http://localhost:10040/page1

Notes
=====

You don't need to create any additional files or anything else if you don't want
to. If you feel more comfortable separating out your client side JavaScript code
for `page1` into its own `.js` file, you can do that by putting it in the
[`static`](https://github.com/h162/candidates/tree/master/web-dev/static)
directory. Files in there will be served by your webserver under the '/-/'
prefix. So, the file `static/hello.txt` can be loaded via
`http://localhost:10040/-/hello.txt`.
