console.log('chrome extension is running')
// This helps avoid conflicts in case we inject 
// this script on the same page multiple times
// without reloading.
<<<<<<< HEAD
var hexToRGB = function(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var colorFamily2 = {
    color1: hexToRGB('#2DE1FC'),
    color2: hexToRGB('#2AFC98'),
    color3: hexToRGB('#09E85E'),
    color4: hexToRGB('#16C172'),
    color5: hexToRGB('#214F4B')
  }

var colorFamily = {
    color1: '#2DE1FC',
    color2: '#2AFC98',
    color3: '#09E85E',
    color4: '#16C172',
    color5: '#214F4B'
  }



// var injected = injected || (function(){

//   // An object that will contain the "methods"
//   // we can use from our event script.
//   var methods = {};

  // This method will eventually return
  // background colors from the current page.
var getBgColors = function(){
    var colors = {};
=======

var getBgColors = function(req, sender, res){
    console.log('req', req.currentColors)
    var colors = req.currentColors;
    console.log('colors', colors)
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
    var nodes = document.querySelectorAll('*');
    var node, nodeArea, bgColor, i;

    var divs = nodes;

    for (var i = 0; i < divs.length; i++) {
      var currentKey = 'color' + (i % 5 + 1);
<<<<<<< HEAD
      divs[i].style['background-color'] = colorFamily[currentKey];
=======
      console.log('current color', colors[currentKey]);
      divs[i].style['background-color'] = colors[currentKey];
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
    }

    return 'Hello' + divs.length;
  };

<<<<<<< HEAD
chrome.runtime.onMessage.addListener(getBgColors);
  // This tells the script to listen for
  // messages from our extension.
//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     var data = {};
//     // If the method the extension has requested
//     // exists, call it and assign its response
//     // to data.
//     if (methods.hasOwnProperty(request.method))
//       data = methods[request.method]();
//     // Send the response back to our extension.
//     sendResponse({ data: data });
//     return true;
//   });

//   return true;
// })();
=======
chrome.runtime.onMessage.addListener(getBgColors);
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
