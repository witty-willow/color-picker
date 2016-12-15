var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db.js')
var ColorFamily = db.ColorFamily;
var controller = require('./controller.js');

app.use(express.static("client"));

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "client/index.html"));
});

app.get('/api/colors', function(req, res) {
  ColorFamily.find({}).sort('-createdAt').exec(function(err, colorFamilies) {
    res.send(colorFamilies);
  });
})

app.post('/api/colors', function(req, res) {
  var palette = req.body.palette;
  var name = req.body.name;

  new ColorFamily({
    name: name,
    color1: {name: palette.color1.name, hex: palette.color1.hex},
    color2: {name: palette.color2.name, hex: palette.color2.hex},
    color3: {name: palette.color3.name, hex: palette.color3.hex},
    color4: {name: palette.color4.name, hex: palette.color4.hex},
    color5: {name: palette.color5.name, hex: palette.color5.hex}
  })
  .save()
  .then(res.json({'message': 'New palette saved.'}))
  .catch(res.json({'message': 'Error saving palette.'}));
});

app.post('/api/copycount', controller.increaseCount);
app.get('/api/daily', controller.getDaily);
app.get('/api/weekly', controller.getWeekly);
app.get('/api/monthly', controller.getMonthly);

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
});