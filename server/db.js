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
  copyCount: {type: Number, default: 0},
  //Set date for future filtering
  createdAt: {type: Date, default: Date.now}
});

var ColorFamily = mongoose.model('ColorFamily', colorFamilySchema);

module.exports = ColorFamily; 
