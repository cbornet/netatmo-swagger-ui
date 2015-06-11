var express = require('express');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/swagger-ui/dist'));

app.post('/oauth2/token', function(req, res) {
  var qs = req.params;
  qs.client_secret='2j9eANMyxorN7z1EGL9Jnf2N98vavLSPwwKLNkZxluj';
  console.log(qs);
  request({ 
    url: 'https://api.netatmo.net/oauth2/token',
    method: 'POST',
    form: qs
  }, function(err, response, body) {
    if(err) { console.log("***" + err); return; }
    console.log("Get response: " + response.statusCode);
    res.send(body);
  });
});


var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
