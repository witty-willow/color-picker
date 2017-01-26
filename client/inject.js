console.log('chrome extension is running')
// This helps avoid conflicts in case we inject 
// this script on the same page multiple times
// without reloading.
var rgbToHex = function(str){
  var a = str.split("(")[1].split(")")[0];
  a = a.split(",").slice(0, 3);

  var b = a.map(function(x){             //For each array element
    x = parseInt(x).toString(16);      //Convert to a base16 string
    return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
  })

  b = "#"+b.join("");

  return b;
}


var colorHandler = function(req, sender, res){
  var currentSite = window.location.host;
  console.log('this site', currentSite);
  var nodes = document.querySelectorAll('*');
  var divs = nodes;

  console.log('task', req)
  if (req.task === 'setBgColors') {
    console.log('req', req.currentColors)
    var colors = req.currentColors;

    for (var i = 0; i < divs.length; i+=4) {
      var currentKey = 'color' + (i % 5 + 1);
      divs[i].style['background-color'] = colors[currentKey].hex;
    }

    return 'Hello' + divs.length;   
  }

  if (req.task === 'getBgColors') {
    var colors = {}

    for (var i = 0; i < divs.length; i++ ){
      var node = nodes[i];
      var nodeArea = node.clientWidth * node.clientHeight;
      var bgColor = window.getComputedStyle(node)['background-color']
      bgColor = bgColor.replace(/ /g, '');
      bgColor = rgbToHex(bgColor);
      // bgColor = bgColor = '#0000000'? '#000000' : bgColor;
      colors[bgColor] = colors[bgColor]? (colors[bgColor] + nodeArea) : nodeArea;
      // if (bgColor.length > 1){      
      //   res('color', bgColor)
      // }
    }

    var top5 = Object.getOwnPropertyNames(colors).sort(function (a, b) {
      return colors[b] - colors[a];
    }).slice(0,5);

    res({name: currentSite, palette: top5});
  }
};

chrome.runtime.onMessage.addListener(colorHandler);
