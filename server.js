var express = require('express');
var app = express();

app.use(express.static('.build/'))

app.listen(3000, function () {
  console.log('HTTP server listening on port 8080!');
});

require('./index')
