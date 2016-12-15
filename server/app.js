var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./db.js')
var ColorFamily = db.ColorFamily;
var CopyCount = db.CopyCount;

app.use(express.static("client"));

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "client/index.html"));
});

app.get('/api/colors', function(req, res) {
  ColorFamily.find({}, function(err, colorFamilies) {
    res.send(colorFamilies);
  })
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
  // console.log('req.body.palette.color1.hex', req.body.palette.color1.hex);
  // console.log('req.body.palette.color1.name', req.body.palette.color1.name);

  // var error = false;

  // var isOk  = /(^#[0-9A-F]{6}$)/i;
  // //validate that form dawwwwg

  // //loop through each key in req.body
  //   //if req.body[key] = (form validation)
  // for (var key in req.body) {
  //   if (!req.body[key].match(isOk)) {
  //     error = true;
  //   }
  //   if (error) {
  //     res.send('error -- invalid hex code');
  //   }
  // }

  // //loop through each key in req.body
  //   //if req.body[key] = (form validation)
  // // for (var key in req.body) {
  // //   if (!req.body[key].match(isOk)) {
  // //     error = true;
  // //   }
  // //   if (error) {
  // //     res.send('error -- invalid hex code');
  // //   }



  // if (!error) {
  //   new ColorFamily ({
  //     color1: req.body.color1,
  //     color2: req.body.color2,
  //     color3: req.body.color3,
  //     color4: req.body.color4,
  //     color5: req.body.color5,
  //   }).save()
  //   .then(res.sendStatus(201))
  // }
})

app.post('/api/copycount', function(req, res) {
  var hex = req.body.hex
  CopyCount.findOne({}, function(err, result) {
    if(err){
      throw err;
    } else {
      var data = result.data;
      console.log(data)
      if(data.hasOwnProperty(hex)) {
        data[hex]++;
      } else {
        data[hex] = 0;
        CopyCount.update()
      }
      CopyCount.update({_id: result._id}, {$set: {data: data}}, function (err, something) {
        if(err) {throw err}
      })
    }
  });
  res.end();
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
});