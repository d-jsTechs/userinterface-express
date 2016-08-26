/**
 * Created by Shadow on 2016/8/26.
 */
function execute(someFuc, word) {
    someFuc(word)
}

execute(function (word) {
    console.log(word)
}, "testA");



var http = require("http");

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);


function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Eric World");
    response.end();
}

http.createServer(onRequest).listen(8881);