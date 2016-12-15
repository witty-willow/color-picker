var ColorFamily = require('./db.js').ColorFamily;
var CopyCount = require('./db.js').CopyCount;

var init = function() {

  // var colorFamilies = [['#000000', '#586F7C', '#B8DBD9', '#F4F4F9', '#04724D'], ['#2DE1FC', '#2AFC98', '#09E85E', '#16C172', '#214F4B'], ['#8EA604', '#F5BB00', '#EC9F05', '#D76A03', '#BF3100'], ['#9CFFFA', '#ACF39D', '#B0C592', '#A97C73', '#AF3E4D'],
  //  ['#BEEF9E', '#A6C36F', '#828C51', '#335145', '#1E352F'], ['#C2C1C2', '#42213D', '#683257', '#BD4089', '#F51AA4'], ['#44AF69', '#F8333C', '#FCAB10', '#2B9EB3', '#DBD5B5'], ['#050517', '#CF5C36', '#EFC88B', '#F4E3B2', '#D3D5D7'], ['#D0E3CC', '#F7FFDD', '#FCFDAF', '#EFD780', '#DBA159'],
  //  ['#DB2763', '#B0DB43', '#12EAEA', '#BCE7FD', '#C492B1'], ['#35524A', '#627C85', '#779CAB', '#A2E8DD', '#32DE8A'], ['#8A4F7D', '#887880', '#88A096', '#BBAB8B', '#EF8275'], ['#BD9391', '#ADBABD', '#91B7C7', '#6EB4D1', '#6CBEED'], ['#9CAFB7', '#ADB993', '#D0D38F', '#F6CA83', '#949D6A'],
  //  ['#966B9D', '#C98686', '#F2B880', '#FFF4EC', '#E7CFBC'], ['#011627', '#FF3366', '#2EC4B6', '#F6F7F8', '#20A4F3'], ['#D8DCFF', '#AEADF0', '#C38D94', '#A76571', '#565676'], ['#1B1B3A', '#693668', '#A74482', '#F84AA7', '#FF3562'], ['#202A25', '#5F4BB6', '#86A5D9', '#26F0F1', '#C4EBC8']];

  var colorFamilies = [[{name: 'Black', hex: '#000000'}, {name: 'Black Coral Pearl', hex: '#586F7C'}, {name: 'Ziggurat', hex: '#B8DBD9'}, {name: 'Whisper', hex: '#F4F4F9'}, {name: 'Watercourse', hex: '#04724D'}],
  [{name: 'Cyan', hex: '#2DE1FC'}, {name: 'Spring Green', hex: '#2AFC98'}, {name: 'Malachite', hex: '#09E85E'}, {name: 'Mountain Meadow', hex: '#16C172'}, {name: 'Blue Dianne', hex: '#214F4B'}],
  [{name: 'Razzmic Berry', hex: '#8A4F7D'}, {name: 'Empress', hex: '#887880'}, {name: 'Mantle', hex: '#88A096'}, {name: 'Indian Khaki', hex: '#BBAB8B'}, {name: 'Apricot', hex: '#EF8275'}]];

  for (var i = 0; i < colorFamilies.length; i++) {
    var colorFamily = colorFamilies[i];
    new ColorFamily({
      name: 'Test Palette',
      color1: {name: colorFamily[0].name, hex: colorFamily[0].hex},
      color2: {name: colorFamily[1].name, hex: colorFamily[1].hex},
      color3: {name: colorFamily[2].name, hex: colorFamily[2].hex},
      color4: {name: colorFamily[3].name, hex: colorFamily[3].hex},
      color5: {name: colorFamily[4].name, hex: colorFamily[4].hex}
    }).save();
  }

  var data = {'RANDOMSTRING': 0};
  var date = {1: {'RANDOMSTRING': 0}};
  new CopyCount({
    monthlyUpdated: 0,
    monthly: data,
    weeklyUpdated: 0,
    weekly: data,
    dailyUpdated: 0,
    date: date,
    data: data
  })
  .save();
}

init();