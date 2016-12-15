var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var ColorFamily = require('./db.js');

app.use(express.static('client'));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.get('/api/colors', function(req, res) {
  ColorFamily.find(function(err, colorFamilies) {
    res.send(colorFamilies);
  });
});

app.post('/api/colors', function(req, res) {

  var error = false;

  var isOk = /(^#[0-9A-F]{6}$)/i;
  //validate that form dawwwwg

  //loop through each key in req.body
    //if req.body[key] = (form validation)
  for (var key in req.body) {
    if (!req.body[key].match(isOk)) {
      error = true;
    }
    if (error) {
      res.send('error -- invalid hex code');
    }
  }



  if (!error) {
    new ColorFamily ({
      color1: req.body.color1,
      color2: req.body.color2,
      color3: req.body.color3,
      color4: req.body.color4,
      color5: req.body.color5,
    }).save()
    .then(res.sendStatus(201));
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

