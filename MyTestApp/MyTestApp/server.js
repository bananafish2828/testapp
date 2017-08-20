const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(morgan('dev'))

app.use(express.static(path.join(__dirname,'./public')));

http.createServer(app).listen(port, function(err) {
    if (err) {
        console.log('** error **', err);        
        console.log('unable to connect to port', port);
    } else {
        console.log('listening on port', port);
    }
});
