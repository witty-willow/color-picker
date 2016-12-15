console.log('chrome extension is running')
// This helps avoid conflicts in case we inject 
// this script on the same page multiple times
// without reloading.

var getBgColors = function(req, sender, res){
    console.log('req', req.currentColors)
    var colors = req.currentColors;
    console.log('colors', colors)
    var nodes = document.querySelectorAll('*');
    var node, nodeArea, bgColor, i;

    var divs = nodes;

    for (var i = 0; i < divs.length; i++) {
      var currentKey = 'color' + (i % 5 + 1);
      console.log('current color', colors[currentKey]);
      divs[i].style['background-color'] = colors[currentKey].hex;
    }

    return 'Hello' + divs.length;
  };

chrome.runtime.onMessage.addListener(getBgColors);
