Our WebDev Position
===================

We're looking for a frontend web developer to join our team. You'll be a primary
contributor to the development of our products and have the chance not only to
build it with us but to determine what we build and how we build it. We're a
small team and move quickly -- but not recklessly.

Hopefully this is interesting to you. In terms of what we're looking for, we
expect that you'll:

-   Have an understanding of server-side JavaScript development using NodeJs.

-   Have a commanding knowledge of client-side JavaScript and AJAX development

-   Understand HTML, the DOM, and CSS in both desktop and mobile web
    environments

-   Have experience and expert knowledge of at least one major client-side
    JavaScript toolchain (Google Closure, YUI, JQuery, Dojo, etc) and be excited
    to learn how to use Google's Closure tools.

-   Know your way around the browser developer console and feel comfortable
    using it to diagnose and understand your code as it runs.

-   Have basic UNIX/MacOSX skills and be able to run scripts and basic commands
    from the command line

-   Have familiarity with `git` and `github` and understand how to use branches,
    pull requests, and other collaborative development tools.

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
following tasks (See [here](https://github.com/h162/candidates#submitting-your-answers) for instructions on how to submit your answers):

-   Obtain [version 0.8.21](http://nodejs.org/dist/v0.8.21/) of NodeJs and
    `npm`, and use `npm` to install the test application:

        $ cd web-dev
        $ npm install

    **Please note**: We use a clean install of NodeJs. This means any modules
    you'll need must be added to your version of `package.json`. That being
    said, we don't expect that you'll need any extra packages for this exercise,
    but you may use them if you like.

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
    [`page1.jade`](https://github.com/h162/candidates/blob/master/web-dev/views/page1.jade).
    With your server running, you can test your page by going to 
    
        http://localhost:10040/page1

Notes
=====

You don't need to create any additional files or anything else if you don't want
to. If you feel more comfortable separating out your client side JavaScript code
for `page1` into its own `.js` file, you can do that by putting it in the
[`static`](https://github.com/h162/candidates/tree/master/web-dev/static)
directory. Files in there will be served by your webserver under the '/-/'
prefix. So, the file `static/hello.txt` can be loaded via

    http://localhost:10040/-/hello.txt
