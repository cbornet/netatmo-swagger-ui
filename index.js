var express = require('express');

var app = express();

app.get('/', function(req, res, next) {
  res.redirect('https://cbornet.github.io/netatmo-swagger-decl/swagger-ui/');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
