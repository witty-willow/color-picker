var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/colorPicker');

colorFamilySchema = mongoose.Schema({
  color1: String,
  color2: String,
  color3: String,
  color4: String,
  color5: String,
  copyCount: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now}
});

var ColorFamily = mongoose.model('ColorFamily', colorFamilySchema);

module.exports = ColorFamily;