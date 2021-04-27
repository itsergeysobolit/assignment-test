// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '127.0.0.1';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8089;

var express = require('express') //framework on node.js https://expressjs.com/
var cors = require('cors') //CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. https://www.npmjs.com/package/cors
var cors_proxy = require('cors-anywhere'); //CORS Anywhere is a NodeJS proxy which adds CORS headers to the proxied request. https://www.npmjs.com/package/cors-anywhere
var app = express()

app.use(cors()) // chect stackoverflow

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});