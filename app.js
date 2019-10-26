// // Basic server
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





// Working with Express JS
