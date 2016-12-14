var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/colorPicker');

colorFamilySchema = mongoose.Schema({
  //Hex color codes only!!
  color1: String,
  color2: String,
  color3: String,
  color4: String,
  color5: String,
  //Establish a baseline for copys/popularity
  //Set date for future filtering
  createdAt: {type: Date, default: Date.now}
});

copyCountSchema = mongoose.Schema({
  data: {}
});

var ColorFamily = mongoose.model('ColorFamily', colorFamilySchema);
var CopyCount = mongoose.model('CopyCount', copyCountSchema);

module.exports.ColorFamily = ColorFamily;
module.exports.CopyCount = CopyCount;