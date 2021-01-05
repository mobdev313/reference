const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const http = require("http");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(bodyParser.json({limit: '50mb'}));

// start server
http.createServer(app).listen(80, () => {
  console.log('Server started');
  console.log(`Open "http://localhost" with a browser.`);
});
