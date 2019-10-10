var http = require("http");
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// Running Server Details.
var server = app.listen(8082, function () {
                        var host = server.address().address
                        var port = server.address().port
                        console.log("Example app listening at %s:%s Port", host, port)
                        });


app.get('/form', function (req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./index.html', function (err, html) {
                    if (err) {
                    throw err;
                    }
                    res.write(html);
                    res.end();
                    });
        });

app.post('/thank', urlencodedParser, function (req, res){
         var reply='';
         reply += "Your name is" + req.body.user_name;
         reply += "Your E-mail id is" + req.body.user_mail;
         res.send(reply);
         });


