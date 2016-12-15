var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/colorPicker');

colorFamilySchema = mongoose.Schema({
  name: String,
  color1: Object,
  color2: Object,
  color3: Object,
  color4: Object,
  color5: Object,
  //Establish a baseline for copys/popularity
  //Set date for future filtering
  createdAt: {type: Date, default: Date.now}
});

copyCountSchema = mongoose.Schema({
    monthlyUpdated: 0,
    monthly: {},
    weeklyUpdated: 0,
    weekly: {},
    dailyUpdated: 0,
    date: {},
    data: {}
});

var ColorFamily = mongoose.model('ColorFamily', colorFamilySchema);
var CopyCount = mongoose.model('CopyCount', copyCountSchema);

module.exports.ColorFamily = ColorFamily;
module.exports.CopyCount = CopyCount;