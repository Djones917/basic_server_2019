// We are using an anonymous function for createServer because we don't need to call it anywhere else!
// req = request and res = response
let ourApp = http.createServer(function(req, res) {

});

ourApp.listen();