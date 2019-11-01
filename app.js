// // First Basic server
// let http = require("http");
// // We are using an anonymous function for createServer because we don't need to call it anywhere else!
// // req = request and res = response
// let ourApp = http.createServer(function(req, res) {
//     // console.log(req.url); 
//   // res.end('Hello, and welcome to our website!');
//   if(req.url == "/") {
//       res.end('Hello, and welcome to our website!');
//   }

//     if (req.url == "/about") {
//         res.end('Hello, and thank you for your interest in our company!');
//     }

//     res.end('We cannot find the page you are looking for!');

// });

// // 3000 for port number NOTE: you have to use node app.js then in new window in browser type localhost:3000 for res.end response!
// // NOTE: listen will keep running in node once called remember ctrl c to stop it!
// ourApp.listen(3000);





// Working with Express JS Server remember '/' is for local host 
// NOTE: action="/answer" is where the form is going to submit the answer! Remember GET,POST for method
let express = require('express');
let ourApp = express();
ourApp.get('/', function(req, res) {
    res.send(`
       <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplet="off">
        <button>Submit Answer</button>
       </form>
    `);
});

ourApp.post('/answer', function(req, res) {
    res.send('Thank you for submitting the form!');
});

// Just to clearify get and post!
ourApp.get('/answer', function (req, res) {
    res.send('Are you lost there is nothing to see here!');
});



ourApp.listen(3000);

